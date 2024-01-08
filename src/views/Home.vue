<template>
  <div class="py-4">
    <pre>
      {{ ingredients }}
    </pre>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data.meals;
});
</script>

<style></style>

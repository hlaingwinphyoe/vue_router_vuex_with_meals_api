<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="border rounded-lg border-gray-300 w-full mb-4"
      placeholder="Search Ingredients"
    />
    <a
      href="javascript:void(0)"
      @click.prevent="openIngredient(ingredient)"
      v-for="ingredient of computedIngredient"
      :key="ingredient.id"
      class="block bg-white rounded p-5 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2 text-orange-500">
        {{ ingredient.strIngredient }}
      </h3>
      <p class="text-gray-500">{{ ingredient.strDescription }}</p>
    </a>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import router from "../router";

const ingredients = ref([]);
const keyword = ref("");

const computedIngredient = computed(() => {
  if (!computedIngredient) return ingredients;
  return ingredients.value.filter((item) =>
    item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredients", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style></style>

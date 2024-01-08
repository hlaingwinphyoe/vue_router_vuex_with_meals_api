<template>
  <div class="p-8">
    <div v-if="!meals.length" class="flex items-center justify-center">
      There's is no meals
    </div>
    <MealsItem v-else :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealsItem from "./MealsItem.vue";
const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style></style>

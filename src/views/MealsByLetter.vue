<template>
  <div class="flex justify-center gap-4 mt-2 py-4">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div v-if="!meals.length" class="flex items-center justify-center">
    There's is no meals
  </div>

  <MealsItem v-else :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealsItem from "./MealsItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();

const meals = computed(() => store.state.mealsByLetter);

const getMeals = () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
};

watch(route, () => {
  getMeals();
});

onMounted(() => {
  getMeals();
});
</script>

<style></style>

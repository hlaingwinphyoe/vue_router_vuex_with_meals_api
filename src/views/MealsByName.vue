<template>
  <div class="py-4">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals By Name</h1>
    <input
      type="text"
      v-model="keyword"
      class="border rounded-lg border-gray-300 w-full"
      placeholder="Search Meals"
      @input="searchMeals"
      @change="searchMeals"
    />
    <div v-if="!meals.length" class="flex items-center justify-center">
      There's is no meals
    </div>
    <MealsItem v-else :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealsItem from "./MealsItem.vue";

const keyword = ref("");
const route = useRoute();

const meals = computed(() => store.state.searchMeals);

function searchMeals() {
  if (keyword.value != "") {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.value;

  if (keyword.value) {
    searchMeals();
  }
});
</script>

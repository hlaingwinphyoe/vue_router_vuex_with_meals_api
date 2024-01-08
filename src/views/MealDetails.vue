<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" class="h-96 max-w-full object-contain" :alt="meal.strMealThumb" />

    <article class="mt-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <p><strong>Category : </strong> {{ meal.strCategory }}</p>
        <p><strong>Area : </strong> {{ meal.strArea }}</p>
        <p><strong>Tags : </strong> {{ meal.strTags }}</p>
      </div>
      <p>
        {{ meal.strInstructions }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h2 class="text-2xl font-semibold mb-2 underline">Ingredients</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)" :key="index">
              <li v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2 underline">Measures</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)" :key="index">
              <li v-if="meal[`strMeasure${index + 1}`]">
                {{ meal[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
            <a :href="meal.strYoutube" class="px-5 py-2 border-2 bg-green-500 text-white rounded-full border-transparent" target="_blank">Youtube</a>
            <a :href="meal.strSource" class="ml-2 px-5 py-2 border-2 border-transparent bg-indigo-600 rounded-full text-white" target="_blank">View Original Source</a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const meal = ref({});
const route = useRoute();

onMounted(() => {
  axiosClient.get("lookup.php?i=" + route.params.id).then(({ data }) => {
    meal.value = data.meals[0];
  });
});
</script>

<style></style>

<template>
  <div class="products grid grid-cols-1 md:grid-cols-4 mr-8 gap-4">
    <div
      class="product w-full h-auto rounded shadow hover:shadow-lg"
      v-for="meal of meals"
      :key="meal.idMeal"
    >
      <img
        :src="meal.strMealThumb"
        class="cursor-pointer"
        :alt="meal.strMeal"
      />
      <div class="mt-5">
        <h1>{{ meal.strMeal }}</h1>
        <span class="bg-orange-300 px-2.5 py-1 text-xs rounded-full mr-1"
          >#{{ meal.strCategory }}</span
        >
      </div>
      <div class="mt-5 mb-3 text-right">
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="bg-green-500 rounded-full px-5 py-2 text-white hover:bg-green-700"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { meals } = defineProps({
  meals: Array,
});
</script>

<style>
.products {
  padding: 20px;
  padding-top: 20px;
  text-align: center;
}

.products .product {
  position: relative;
  overflow: hidden;
  text-align: left;
  display: inline-block;
  margin: 20px;
  padding: 20px;
}

.products .product img {
  position: relative;
  top: -5px;
  margin: auto;
  transition: all 0.2s ease;
  width: 100%;
  -webkit-clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%);
  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%);
}
.products .product img:hover {
  -webkit-clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%);
  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

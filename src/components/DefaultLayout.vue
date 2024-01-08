<template>
  <navbar />
  <div class="max-w-[1200px] mx-auto">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style></style>

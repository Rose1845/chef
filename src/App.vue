<script setup>
// import { ref } from "vue";
import { RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/NavBar.vue";
import FooterAll from "./components/FooterAll.vue";
// const loading = ref(true);
</script>

<template>
  <div>
    <NavBar />

    <router-view></router-view>

    <FooterAll />
  </div>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style> -->

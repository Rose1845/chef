<script setup>
import { ref, onMounted } from "vue";
import $ from "jquery";
const navBarOpen = ref(true);
const toggleNavBar = () => {
  navBarOpen.value = !navBarOpen.value;
};

onMounted(() => {
  $(window).on("resize", () => {
    if ($(window).width() >= 768) {
      navBarOpen.value = true;
    }
  });
});
</script>
<template>
  <div class="container-xxl position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <router-link :to="{ name: 'home' }" class="navbar-brand p-0">
        <h1 class="m-0">Chef</h1>
      </router-link>

      <button
        @click="toggleNavBar"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </button>
      <div
        :class="{ show: !navBarOpen }"
        class="collapse navbar-collapse"
        id="navbarCollapse"
      >
        <div class="navbar-nav ms-auto py-0">
          <router-link to="/contact" class="nav-item nav-link"
            >Contact</router-link
          >
          <div>
            <router-link
              class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </div>
          <div>
            <router-link
              class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
              :to="{ name: 'register' }"
              >Create account</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

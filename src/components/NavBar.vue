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
      <!-- <div class="d-flex align-items-center">
        <div class="dropdown ms-3">
          <button
            class="btn btn-secondary dropdown-toggle rounded-pill py-2 px-4"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <font-awesome-icon icon="user"></font-awesome-icon>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <router-link class="dropdown-item" :to="{ name: 'login' }"
                >Login</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'register' }"
                >Get Started</router-link
              >
            </li>
          </ul>
        </div>
      </div>
       -->

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
          <router-link :to="{ name: 'restaurant' }" class="nav-item nav-link"
            >Restaurant</router-link
          >
          <router-link
            :to="{ name: 'cooking-classes' }"
            class="nav-item nav-link"
          >
            Cooking Classes</router-link
          >
          <router-link to="/contact" class="nav-item nav-link"
            >Contact Us</router-link
          >
          <div>
            <router-link
              class="btn btn-primary text-light rounded-pill py-2 px-4 ms-3"
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </div>
          <div>
            <router-link
              class="btn btn-primary text-light rounded-pill py-2 px-4 ms-3"
              :to="{ name: 'register' }"
              >Get Started</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

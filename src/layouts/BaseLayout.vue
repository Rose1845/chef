<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterHead from "../components/FooterHead.vue";
</script>
<template>
  <div>
    <NavBar />
    <router-view />
    <FooterHead />
  </div>
</template>

<script setup>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
</script>
<template>
  <admin-header />
  <div class="ml w-75">
    <admin-sidebar />
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

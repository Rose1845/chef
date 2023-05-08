<script setup>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
</script>
<template>
  <admin-header />
  <admin-sidebar />
  <div>
    <router-view />
  </div>
</template>

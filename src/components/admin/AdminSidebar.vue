<script setup></script>

<template>
  <div class="h-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Admin</h1>
        </div>
        <hr />
        <div class="fs-4 fw-bold">
          <router-link to="/admin/users">Users</router-link>
        </div>
        <div class="fs-4 fw-bold">
          <router-link to="/admin/chefs">Chefs</router-link>
        </div>
        <div class="fs-4 fw-bold">
          <router-link to="/clients">Clients</router-link>
        </div>
        <div class="fs-4 fw-bold">
          <router-link to="/orders">Orders</router-link>
        </div>
        <div class="fs-4 fw-bold text-decoration-none">
          <router-link to="/profile">Profile</router-link>
        </div>
        <div class="">
          <button class="btn btn-primary px-3 py-2">logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

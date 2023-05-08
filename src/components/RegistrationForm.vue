<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<template>
  <div class="container-xxl py-5">
    <div class="container px-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="section-title position-relative text-center mb-5 pb-2">
            <h6 class="position-relative d-inline text-primary ps-4">
              register
            </h6>
            <h2 class="mt-2">Sign Up</h2>
          </div>
          <div>
            <form @submit.prevent="register">
              <div class="row g-3">
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="email"
                      placeholder="Your email"
                    />
                    <label for="email">Email</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      v-model="password"
                      placeholder="Your password"
                    />
                    <label for="email">Your password</label>
                  </div>
                </div>

                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
              <p>
                Already have an account?
                <router-link :to="{ name: 'login' }">Sign in</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

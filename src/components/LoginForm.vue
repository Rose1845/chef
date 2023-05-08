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
            <h2 class="mt-4">Login</h2>
          </div>
          <div>
            <form>
              <div class="row g-3">
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label for="name">Your Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Your password"
                    />
                    <label for="email">Your password</label>
                  </div>
                </div>

                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">
                    Sign In
                  </button>
                </div>
              </div>
              <p>
                Don't have an account?
                <router-link :to="{ name: 'register' }"
                  >Create account</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable vue/require-v-for-key -->
<script setup>
import { services } from "../../data";
// tabs
</script>

<template>
  <main>
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl py-5 hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5 flex-sm-row-reverse">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="text-dark mb-4">
                <span class="text-primary">Chef</span> you need to grow your
                restaurant rapidly
              </h1>
              <p class="text-dark pb-3 animated zoomIn">
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                Sit diam sit justo amet ipsum vero ipsum clita lorem
              </p>
              <RouterLink
                class="btn btn-primary py-sm-3 px-sm-5 rounded-pill me-3"
                to="/register"
                >Find Your Chef</RouterLink
              >
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <img class="img-fluid" src="/chef.png" alt="no pic" />
            </div>
          </div>
        </div>
      </div>

      <!-- abou content> -->
      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp">
              <div class="section-title position-relative mb-4 pb-2">
                <h6 class="position-relative text-primary ps-4">About Us</h6>
                <h2 class="mt-2 capitalize">
                  We produce the best Chef for your restaurant business growth
                </h2>
              </div>
              <p class="mb-4"></p>
              <div class="row g-3">
                <div class="col-sm-6">
                  <h6 class="mb-3">
                    <font-awesome-icon
                      class="text-primary me-2"
                      icon="check"
                    />Fresh
                  </h6>
                  <h6 class="mb-0">
                    <font-awesome-icon
                      class="text-primary me-2"
                      icon="check"
                    />Professional Chef
                  </h6>
                </div>
                <div class="col-sm-6">
                  <h6 class="mb-3">
                    <font-awesome-icon
                      class="text-primary me-2"
                      icon="check"
                    />24/7 Fast Delivery
                  </h6>
                  <h6 class="mb-0">
                    <font-awesome-icon
                      class="text-primary me-2"
                      icon="check"
                    />Pastry
                  </h6>
                </div>
              </div>
              <div class="d-flex align-items-center mt-4">
                <a href="" class="btn btn-primary rounded-pill px-4 me-3"
                  >Read More</a
                >
              </div>
            </div>
            <div class="col-lg-6">
              <img class="img-fluid" src="/bestchef.png" />
            </div>
          </div>
        </div>
      </div>

      <!-- About End -->
      <!-- Service Start -->
      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div
            class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          >
            <h6 class="position-relative d-inline text-primary ps-4">
              Our Services
            </h6>
            <h2 class="mt-2">What Solutions We Provide</h2>
          </div>
          <div class="row  g-2 ml-3">
            <div
              v-for="service in services"
              class="card col-lg-4 col-md-6 "
              :key="service.title"
            >
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded mr-3"
              >
                <div class="service-icon flex-shrink-0 text-primary">
                  <font-awesome-icon :icon="service.icon"></font-awesome-icon>
                </div>
                <h5 class="mb-3">{{ service.title }}</h5>
                <p>
                  {{ service.desc }}
                </p>
                <div>
                  <a class="btn btn-primary rounded-pill px-4 me-3" href=""
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<template>
  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container px-lg-5">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeInUp">
          <div class="section-title position-relative mb-4 pb-2">
            <h6 class="position-relative text-primary ps-4">About Us</h6>
            <h2 class="mt-2">The best Chef with over 5 years of experience</h2>
          </div>
          <p class="mb-4"></p>
          <div class="row g-3">
            <div class="col-sm-6">
              <h6 class="mb-3">
                <font-awesome-icon
                  class="text-primary me-2"
                  icon="check"
                />Award Winning
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
                <font-awesome-icon class="text-primary me-2" icon="check" />24/7
                Fast Delivery
              </h6>
              <h6 class="mb-0">
                <font-awesome-icon class="text-primary me-2" icon="check" />Best
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
          <img class="img-fluid" src="../assets/about.jpg" />
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

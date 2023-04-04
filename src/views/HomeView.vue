<!-- eslint-disable vue/require-v-for-key -->
<script setup>
import { services } from "../../data";
</script>

<template>
  <main>
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl py-5  hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="text-dark mb-4 ">
               <span class="text-primary">Chef</span> you need to grow your restaurant rapidly
              </h1>
              <p class="text-dark pb-3 animated zoomIn">
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                Sit diam sit justo amet ipsum vero ipsum clita lorem
              </p>
              <RouterLink
                class="btn btn-primary py-sm-3 px-sm-5 rounded-pill me-3"
                to="/register"
                >Get Started</RouterLink
              >
              <RouterLink
                class="btn btn-light text-dark py-sm-3 px-sm-5 rounded-pill"
                to="/contact"
                >Contact Us</RouterLink
              >
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <img
                class="img-fluid"
                src="https://o.remove.bg/downloads/09d64c44-061e-4e96-b7b2-cce1e665479e/photo-1577219492769-b63a779fac28-removebg-preview.png"
                alt=""
              />
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
                <h2 class="mt-2">
                  The best Chef with over 5 years of experience
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
              <img
                class="img-fluid"
                src="https://o.remove.bg/downloads/4971ee3f-453d-4fb5-ab2a-1199bfe7f1a3/istockphoto-1415519917-170667a-removebg-preview.png"
              />
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
          <div  class="row g-1 ml-3" >
            <div
              v-for="service in services"
              class="card col-lg-4 col-md-6 ml-2"
              :key="service.id"
            >
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded"
              >
                <div class="service-icon flex-shrink-0 text-primary">
                  <font-awesome-icon :icon="service.icon"></font-awesome-icon>
                </div>
                <h5 class="mb-3">{{ service.title }}</h5>
                <p>
                  {{ service.desc }}
                </p>
                <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
              </div>
            </div>
            <!-- <div class="card col-lg-4 col-md-6">
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded"
              >
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Pastry</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda esse doloremque hic laudantium laboriosam itaque,
                  aliquid sed. Incidunt, libero quas?
                </p>
                <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn">
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded"
              >
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Interior Design</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn">
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded"
              >
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Food Delivery</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn">
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded"
              >
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Baking</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn">
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded"
              >
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Home Making</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn">
              <div
                class="service-item d-flex flex-column justify-content-center text-center rounded"
              >
                <div class="service-icon flex-shrink-0">
                  <i class="fa fa-home fa-2x"></i>
                </div>
                <h5 class="mb-3">Decoration</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- Service End -->

      <!-- Portfolio Start -->
      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div class="section-title position-relative text-center mb-5 pb-2">
            <h6 class="position-relative d-inline text-primary ps-4">
              Our Projects
            </h6>
            <h2 class="mt-2">Recently Launched Foods</h2>
          </div>
          <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
            <div class="col-12 text-center">
              <ul class="list-inline mb-5" id="portfolio-flters">
                <li class="btn px-3 pe-4 active" data-filter="*">All</li>
                <li class="btn px-3 pe-4" data-filter=".first">Baking</li>
                <li class="btn px-3 pe-4" data-filter=".second">Pastry</li>
              </ul>
            </div>
          </div>
          <div class="row g-4 portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item first">
              <div class="position-relative rounded overflow-hidden">
                <img
                  class="img-fluid w-100"
                  src="../assets/portfolio-1.jpg"
                  alt=""
                />
                <div class="portfolio-overlay">
                  <a
                    class="btn btn-light"
                    href="../assets/portfolio-1.jpg"
                    data-lightbox="portfolio"
                    ><i class="fa fa-plus fa-2x text-primary"></i
                  ></a>
                  <div class="mt-auto">
                    <small class="text-white"
                      ><i class="fa fa-folder me-2"></i>INterior Design</small
                    >
                    <a class="h5 d-block text-white mt-1 mb-0" href=""
                      >Project Name</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ss
    </div>
  </main>
</template>

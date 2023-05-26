<script>
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  setup() {
    const state = reactive({
      name: "",
      subject: "",
      message: "",
      contact: {
        email: "",
      },
    });
    const rules = {
      name: { required }, // Matches state.name
      message: { required },
      subject: { required }, // Matches state.subject
      contact: {
        email: { required, email }, // Matches state.contact.email
      },
    };
    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  data() {},
};
</script>
<template>
  <!-- Contact Start -->
  <div class="container-xxl py-5">
    <div class="container px-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div
            class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          >
            <h2 class="mt-2">Do you Any Question?</h2>
            <h6 class="position-relative d-inline text-primary ps-4">
              Contact Us
            </h6>
          </div>
          <div>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      v-model="state.name"
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <input
                      v-model="state.contact.email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <divs>
                    <input
                      v-model="state.subject"
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label for="subject">Subject</label>
                  </divs>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea
                      v-model="state.message"
                      class="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style="height: 150px"
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

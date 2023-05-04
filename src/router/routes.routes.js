import LoginForm from "@/components/LoginForm.vue";
import ContactView from "@/views/ContactView.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: import("@/views/HomeView.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "register",
    component: RegistrationForm,
  },
  {
    path: "/contact",
    name: "contact",
    // meta:{requi},
    component: ContactView,
  },
];

export default routes;

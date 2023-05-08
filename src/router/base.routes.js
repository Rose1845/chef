const baseRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: () => import("@/components/LoginForm.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/RegistrationForm.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
];

export default baseRoutes;

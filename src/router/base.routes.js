const baseRoutes = [
  {
    path: "/",
    name: "baseLayout",
    component: () => import("@/layouts/BaseLayout.vue"),
    children: [
      {
        path: "",
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
      {
        path: "/restaurant",
        name: "restaurant",
        component: () => import("@/views/RestaurantView.vue"),
      },
      {
        path: "/cooking-classes",
        name: "cooking-classes",
        component: () => import("@/views/CookingClasses.vue"),
      },
    ],
  },
];

export default baseRoutes;

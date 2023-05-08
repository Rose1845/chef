const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    children: [
      {
        path: "/admin",
        name: "adminlayout",
        component: () => import("@/layouts/AdminLayout.vue"),
        chidlren: [
          {
            path: "clients",
            name: "admin-clients",
            component: () => import("@/components/admin/AdminClients.vue"),
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    component: import("@/components/LoginForm.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: import("@/components/RegistrationForm.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: import("@/views/ContactView.vue"),
  },
];
export default routes;

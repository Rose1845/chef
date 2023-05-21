const adminRoutes = [
  {
    path: "/admin",
    name: "adminlayout",
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
    component: () => import("@/layouts/AdminLayout.vue"),
    chidlren: [
      {
        path: "clients",
        name: "admin-clients",
        component: () => import("@/components/admin/AdminClients.vue"),
      },
      {
        path: "users",
        name: "adminUsers",
        component: () => import("@/components/admin/AdminUsers.vue"),
      },
      {
        path: "chefs",
        name: "admin-chefs",
        component: () => import("@/components/admin/AdminChefs.vue"),
      },
      {
        path: "profile",
        name: "admin-profile",
        component: () => import("@/components/admin/AdminProfile.vue"),
      },
    ],
  },
];

export default adminRoutes;

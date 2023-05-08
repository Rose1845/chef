const adminRoutes = [
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
];

export default adminRoutes;

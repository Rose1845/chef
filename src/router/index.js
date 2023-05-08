import { createRouter, createWebHistory } from "vue-router";
import routes from "./route.routes";
// import baseRoutes from "./base.routes";
// import adminRoutes from "./admin.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../views/TeamView.vue"),
    },
    {
      path: "/map",
      name: "map",
      component: () => import("../views/MapView.vue"),
    },
  ],
});

export default router

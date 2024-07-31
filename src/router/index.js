import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainView from './MainView.vue';

export const isHistory = import.meta.env.VITE_APP_ROUTER_HISTORY === 'true';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: isHistory
    ? createWebHistory(import.meta.env.VITE_APP_BASE_URL)
    : createWebHashHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView,
    },
    ,
    ...routes,
  ],
});
router.$isHistory = isHistory;

export { routes };
export default router;

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/property-selected',
      name: 'property-selected',
      component: () => import('@/views/PropertySelected.vue')
    }
  ]
});

export default router;

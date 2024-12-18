import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home.vue';
import Projects from '@/pages/projects.vue';
import NotFound from '@/pages/not-found.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    },
  ]
})

export default router

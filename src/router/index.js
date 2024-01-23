import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home-view.vue';
import Projects from '@/views/projects-view.vue';
import NotFound from '@/views/not-found-view.vue';

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

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home-view.vue';
import Projects from '@/views/projects-view.vue';
import Articles from '@/views/articles-view.vue';
import Article from '@/views/article-view.vue';

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
    // {
    //     path: '/articles',
    //     name: 'articles',
    //     component: Articles
    // },
    // {
    //     path: '/articles/:article',
    //     name: 'article',
    //     component: Article
    // },
  ]
})

export default router

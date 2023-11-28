import { createRouter, createWebHistory } from 'vue-router'
import Post from '../pages/Post.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Post
    },
    {
      path: '/p/:id',
      component: Post
    },
    {
      path: '/list',
      component: () => import('../pages/List.vue')
    },
    {
      path: '/about',
      component: () => import('../pages/About.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: '/',
    }
  ]
})

export default router
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
    }
  ]
})

export default router
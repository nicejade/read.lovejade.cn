import { createRouter, createWebHistory } from 'vue-router'
import Post from '../pages/Post.vue'
import List from '../pages/List.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Post
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/p/:id',
      component: Post
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: '/',
    }
  ]
})

export default router
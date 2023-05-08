import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
    path: '/access/:method/',
    name: 'Access',
    component: () => import('../views/Access.vue'),
    },
  ]
  
})





export default router

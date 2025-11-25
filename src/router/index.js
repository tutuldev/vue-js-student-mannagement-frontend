import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Home from '../views/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/home',
    name: 'Home',
    component: Home
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

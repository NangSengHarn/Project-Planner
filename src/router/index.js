import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProj from '../views/AddProj.vue'
import EditProj from '../views/EditProj.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addProj',
    name: 'AddProj',
    component: AddProj
  },
  {
    path: '/editProj/:id',
    name: 'EditProj',
    component: EditProj,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

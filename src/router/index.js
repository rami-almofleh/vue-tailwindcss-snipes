import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImgRightContentLeft from '../views/ImgRightContentLeft.vue'
import ImageTopContentBottom from '../views/ImageTopContentBottom.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/text-right-img-left',
    name: 'text-right-img-left',
    component: ImgRightContentLeft
  },
  {
    path: '/img-top-content-bottom',
    name: 'img-top-content-bottom',
    component: ImageTopContentBottom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

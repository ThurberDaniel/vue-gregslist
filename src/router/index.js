import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../pages/About.vue'
import CarDetails from '../pages/CarDetailsPage.vue'
import HousesDetails from '../pages/HousesDetails.vue'
import Cars from '../pages/CarsPage.vue'
import Home from '../pages/Home.vue'
import Houses from '../pages/HousesPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/houses/:id',
    name: 'HousesDetails',
    component: HousesDetails
  },
  {
    // NOTE the parameter name is distinguished by the ':'
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },

  {
    path: '/profile',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

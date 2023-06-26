import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutsUsView from '../views/AboutUsView.vue'
import ExhibitionView from '../views/ExhibitionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutsUsView
  },
  {
    path: '/exhibition',
    name: 'exhibition',
    component: ExhibitionView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

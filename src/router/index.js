import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {

    path: '/home',
    name: 'home',
    component: () => import('../components/Booking.vue')
  },
  {
    path: '/train_list',
    name: 'train_list',
    component: () => import('../components/TrainList.vue')
  },
  {
    path: '/payment-details',
    name: 'payment-details',
    component: () => import('../components/Payment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

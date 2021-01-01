import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Lifecycle from '../views/Lifecycle.vue'
import YourCart from '../views/YourCart.vue'
import History from '../views/History.vue'
import ProductDetail from '../views/ProductDetail.vue'
import AddCoupon from '../views/AddCoupon.vue'
import Login from '../views/auth/login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: Lifecycle
  },
  {
    path: '/yourcart',
    name: 'YourCart',
    component: YourCart
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: ProductDetail,
    // verifikasidengan meta
    meta: { requiresAuth: true }
  },
  {
    path: '/addCoupon',
    name: 'AddCoupon',
    component: AddCoupon
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//middleware login
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // mengambil data dari getters auth
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router

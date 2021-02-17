import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import YourCart from '../views/YourCart.vue'
import History from '../views/History.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/auth/login.vue'
import SignUp from '../views/auth/SignUp.vue'
import ForgotPass from '../views/ForgotPass.vue'
import Profile from '../views/Profile'
import AddProduct from '../views/AddProduct.vue'
import NewPromo from '../views/NewPromo.vue'
import EditProduct from '../views/EditProduct.vue'
import EditPromo from '../views/EditPromo.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
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
    path: '/productDetail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    // verifikasidengan meta
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgotPass',
    name: 'ForgotPass',
    component: ForgotPass
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/newPromo',
    name: 'NewPromo',
    component: NewPromo
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/editPromo/:id',
    name: 'EditPromo',
    component: EditPromo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: () => import( /* webpackChunkName: "quiz" */ '../views/Quiz.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !router.app.$store.state.user) {
    next({
      name: 'Login'
    })
  } else {
    next()
  }
})

export default router
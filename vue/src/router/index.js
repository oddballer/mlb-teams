import Vue from 'vue'
import Router from 'vue-router'
import Teams from '../views/Teams.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
    name: "teams",
    component: Teams,
    meta: {
      requiresAuth: false
    }
    },
  ]
})

export default router;

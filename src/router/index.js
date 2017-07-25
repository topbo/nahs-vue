import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/page/Welcome'
import Home from '@/page/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

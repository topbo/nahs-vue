import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/page/Welcome'
import Home from '@/page/home'
import Assess from '@/page/assess'
import Recommend from '@/page/Recommend'
// import Assessdetail from '@/page/assessdetail'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   component: error
    // },
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/assess',
      component: Assess
    },
    // {
    //   path: '/assessdetail/:name',
    //   component: Assessdetail
    // },
    {
      path: '/recommend',
      component: Recommend
    }
  ]
})

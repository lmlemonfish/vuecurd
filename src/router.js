import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'demo',
      component: () => import('./components/demo.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('./components/common/my-table.vue')
    }
  ]
})

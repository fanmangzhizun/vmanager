import Vue from 'vue'
import Router from 'vue-router'
import index from  '../views/index.vue'
import manage from '../views/manager.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component:index
    },
    {
      path:'/manage',
      name:'manage',
      component:manage
    }
  ]
})

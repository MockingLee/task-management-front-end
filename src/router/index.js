
import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Dashboard from '@/pages/Dashboard'
import index from '@/pages/index'
import table from '@/pages/table'

Vue.use(Router)
 

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'Main'
    },
    {
      path: '/Main',
      name: 'Main',
      component: resolve => require(['../pages/Main'], resolve),
     
    },
    {
      path: '/manage',
      name: 'manage',
      component: resolve => require(['../pages/manage'], resolve),
      children :[
        {
          path:'/',
          name:'/table',
          component: resolve => require(['../pages/table'], resolve)
        },
        {
          path:'/index',
          name:'/index',
          component: resolve => require(['../pages/index'], resolve)
        },
        {
          path:'/add',
          name:'/add',
          component: resolve => require(['../pages/add'], resolve)
        }
      ]
    },
    {
      path: '/test1',
      name: 'test1',
      component: resolve => require(['../pages/test'], resolve),
    }
  ]
})
 

export default router
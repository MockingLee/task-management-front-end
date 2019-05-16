
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import index from '@/pages/index'
import table from '@/pages/table'

Vue.use(Router)
 

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['../pages/Login'], resolve),
     
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
      path: '/table',
      name: 'table',
      component: resolve => require(['../pages/table'], resolve),
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/Login' && !localStorage.token) {
    return next('/Login')
  }
   next()
})


 

export default router
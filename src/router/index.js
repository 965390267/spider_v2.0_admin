import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/view/login'),
    },
    {
      path:'/index',
      name:'index',
      component:  ()=>import('@/view/main'),
      children:[{
        path: '/index/home',
        name: 'home',
        component: ()=>import('@/view/subpage/allmessage')
      }
      ,{
        path: '/index/rule',
        name: 'rule',
        component: ()=>import('@/view/subpage/rule')
      },{
        path: '/index/list',
        name: 'list',
        component: ()=>import('@/view/subpage/list')
      },{
        path: '/index/rule_list',
        name: 'rule_list',
        component: ()=>import('@/view/subpage/rule_list')
      },{
        path: '/index/setting',
        name: 'setting',
        component: ()=>import('@/view/subpage/setting')
      }
       ]
    },{
      path: '*',
      name: '404',
      component: ()=>import('@/view/error')
    }
  ]
})

// router.beforeEach((to,from,next)=>{
// const isLogin=localStorage.getItem('token')?true:false;
// if(to.path=='/'||to.path=='/register'){
//   next()
// }else{
//   isLogin?next():next('/')
// }
// })
export default router;
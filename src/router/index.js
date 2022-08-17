import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   redirect:'/login'
  // },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/login',
    component:() => import('components/Login.vue'),
  },
  {
    path:'/home',
    component:() => import('components/Home.vue'),
    redirect:'/roleList',
    children:[
      { path:'/roleList',component:() => import('components/roleManagement/RoleList.vue')},
      { path:'/usersList', component:() => import('components/userManagement/UsersList.vue') },
      { path:'/dataCollection', component:() => import('components/dataCollection/DataCollection.vue') },
      { path:'/projectList', component:() => import('components/projectManagement/ProjectList.vue') }, 
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

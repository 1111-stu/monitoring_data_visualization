import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  // {
  //   path:'/',
  //   redirect:'/home'
  // },
  {
    path: '/login',
    component: () => import('components/Login.vue'),
  },
  {
    path: '/home',
    component: () => import('../layout/Home.vue'),
    redirect: '/roleList',
    children: [
      { path: '/roleList', component: () => import('components/roleManagement/RoleList.vue') },
      { path: '/usersList', component: () => import('components/userManagement/UsersList.vue') },
      { path: '/dataCollection', component: () => import('components/dataCollection/DataCollection.vue') },
      { path: '/projectList', component: () => import('components/projectManagement/ProjectList.vue') },
      { path: '/page1', component: () => import('components/other/Page1.vue') },
      { path: '/page2', component: () => import('components/other/Page2.vue') },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  console.log(token)
  if (!token && to.path !== '/login') {
    console.log(222)
    next({ path: '/login' })
  }
  else {
    next()
  }
})
export default router

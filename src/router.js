import vueRouter from 'vue-router'
import Home from './components/Home'
import User from './components/User'
import UserCreate from './components/UserCreate'
import App from './App'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: "root",
      component: App
    },
    {
      path: '/home',
      name: "home",
      component: Home
    },
    {
      path: '/user/:name',
      name: "user",
      component: User
    },
    {
      path: '/user/create',
      name: "user_create",
      component: UserCreate
    },

  ]
})
export default router

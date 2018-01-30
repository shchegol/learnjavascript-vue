import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/pages/IndexPage'
import UsersPage from '@/components/pages/UsersPage'
import UserEdit from '@/components/pages/EditPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/users',
      component: UsersPage
    },
    {
      path: '/users/edit',
      component: UserEdit
    }
  ]
})

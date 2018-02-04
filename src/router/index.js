import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/pages/IndexPage.vue'

const UserList = () => import('@/components/pages/UserList.vue')
const UserAdd = () => import('@/components/pages/UserAdd.vue')
const UserEdit = () => import('@/components/pages/UserEdit.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: IndexPage},
    {path: '/list', component: UserList},
    {path: '/user/add', component: UserAdd},
    {path: '/user/:id', component: UserEdit, props: true}
  ]
})

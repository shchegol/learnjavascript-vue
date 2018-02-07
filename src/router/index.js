import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/pages/IndexPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: IndexPage},
    {path: '/list', component: () => import('@/components/pages/UserList.vue')},
    {path: '/user/add', component: () => import('@/components/pages/UserAdd.vue')},
    {path: '/user/:id', component: () => import('@/components/pages/UserEdit.vue'), props: true}
  ]
})

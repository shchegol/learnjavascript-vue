<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Users</h1>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-auto">
        <rows-per-page v-model.number="selectedPage"></rows-per-page>
      </div>
      <div class="col text-right">
        <button @click="toMainPage" class="btn btn-primary">go to main page</button>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <div v-if="!users" class="alert alert-info">
          Loading...
        </div>

        <user-list v-else :users="filteredUsers"></user-list>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col">
        <list-pagination v-model.number="selectedPage" :totalPage="totalUsers" ></list-pagination>
      </div>
      <div class="col text-right text-bold">
        total: {{ totalUsers }}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UserList from '@/components/UserList.vue'
  import RowsPerPage from '@/components/RowsPerPage.vue'
  import ListPagination from '@/components/ListPagination.vue'

  export default {
    name: 'UserPage',
    components: {
      UserList,
      RowsPerPage,
      ListPagination
    },
    data () {
      return {
        users: [],
        selectedPage: 5
      }
    },
    computed: {
      filteredUsers () {
        return this.users.filter((item, index) => {
          return index < this.selectedPage
        })
      },
      totalUsers () {
        return this.users.length
      }
    },
    methods: {
      fetchUserList () {
        axios.get('http://localhost:3000/users')
          .then(response => {
            this.users = response.data
          })
      },
      toMainPage () {
        this.$router.push('/')
      }
    },
    created () {
      this.fetchUserList()
    },
  }
</script>

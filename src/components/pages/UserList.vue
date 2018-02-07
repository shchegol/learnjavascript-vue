<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Users</h1>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-auto">
        <rows-per-page v-model.number="usersPerPage"></rows-per-page>
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
        <list-pagination v-show="showPagination" v-model.number="selectedPage" :per-page="usersPerPage" :totalPage="totalUsers" ></list-pagination>
      </div>
      <div class="col text-right">
        total: {{ totalUsers }}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import RowsPerPage from '@/components/common/RowsPerPage.vue'
  import ListPagination from '@/components/common/ListPagination.vue'
  import UserList from '@/components/UserList.vue'

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
        usersPerPage: 5,
        selectedPage: 1
      }
    },
    computed: {
      filteredUsers () {
        return this.users.filter((item, index) => {
          const startIndex = (this.selectedPage - 1) * this.usersPerPage;
          const finalIndex = startIndex + this.usersPerPage;
          return startIndex <= index && index < finalIndex;
        })
      },
      totalUsers () {
        return this.users.length
      },
      showPagination() {
        return this.usersPerPage <= this.totalUsers
      }
    },
    watch: {
      usersPerPage() {
        this.selectedPage = 1;
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

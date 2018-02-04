<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Users list</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
<button @click="toMainPage" class="btn btn-primary">Main page</button>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <div v-if="!users" class="alert alert-info">
          Loading...
        </div>

        <user-list v-else :users="users"></user-list>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UserList from '@/components/UserList.vue'

  export default {
    name: 'UserPage',
    components: {
      UserList
    },
    data () {
      return {
        users: [],
      }
    },
    methods: {
      fetchUserList () {
        axios.get('http://localhost:3000/users')
          .then(response => {
            this.users = response.data
          })
      },
      toMainPage() {
        this.$router.push('/')
      }
    },
    created () {
      this.fetchUserList()
    },
  }
</script>

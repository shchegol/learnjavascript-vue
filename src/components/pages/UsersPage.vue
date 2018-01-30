<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Список пользователей</h1>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <div v-if="!haveUsers" class="alert alert-info">
          Загрузка...
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
    created () {
      this.fetchUserList()
    },
    computed: {
      haveUsers () {
        return this.users.length > 0
      }
    },
    methods: {
      fetchUserList () {
        axios.get('http://localhost:3000/users')
          .then(response => {
            this.users = response.data
          })
      }
    },
  }
</script>

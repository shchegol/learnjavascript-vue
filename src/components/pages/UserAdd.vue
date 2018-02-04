<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Add user</h1>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <user-form :user="user"></user-form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="addUser" class="btn btn-success" :disabled="adding">
          {{ addingText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UserForm from '@/components/UserForm.vue'

  export default {
    name: 'UserAdd',
    components: {
      UserForm
    },
    data () {
      return {
        user: {},
        adding: false
      }
    },
    computed: {
      addingText () {
        return this.saving ? 'Adding...' : 'Add'
      }
    },
    methods: {
      addUser () {
        this.adding = true
        axios.post('http://localhost:3000/users/', this.user)
          .then(() => {
            this.adding = false
            this.$router.push('/list')
          })

      }
    }
  }
</script>

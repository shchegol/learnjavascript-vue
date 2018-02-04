<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>User edit</h1>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <div v-if="!user" class="alert alert-info">
          Loading...
        </div>
        <user-form v-else v-model="user"></user-form>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <button @click="saveUser" class="btn btn-success" :disabled="saving">
          {{ savingText }}
        </button>
      </div>
      <div class="col text-right">
        <button @click="deleteUser" class="btn btn-danger" :disabled="deleting">
          {{ removingText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UserForm from '@/components/UserForm.vue'

  export default {
    name: 'UserEdit',
    components: {
      UserForm
    },
    data () {
      return {
        user: {},
        saving: false,
        deleting: false
      }
    },
    computed: {
      id () {
        return this.$route.params.id
      },
      savingText () {
        return this.saving ? 'Saving...' : 'Save'
      },
      removingText () {
        return this.deleting ? 'Deleting...' : 'Delete'
      }
    },
    watch: {
      '$route': 'loadUser'
    },
    methods: {
      loadUser () {
        axios.get(`http://localhost:3000/users/${this.id}`)
          .then(response => {
            this.user = response.data
          })
      },
      saveUser () {
        this.saving = true
        axios.patch(`http://localhost:3000/users/${this.id}`, this.user)
          .then(() => {
            this.saving = false
          })
      },
      deleteUser () {
        let answer = confirm('Are you sure?')

        if (answer) {
          this.deleting = true
          axios.delete(`http://localhost:3000/users/${this.id}`)
            .then(() => {
              this.deleting = false
              this.$router.push('/list')
            })
        }

      }
    },
    mounted () {
      this.loadUser()
    }
  }
</script>

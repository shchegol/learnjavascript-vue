<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Редактирование пользователей</h1>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <user-form :user="user"></user-form>
      </div>
    </div>
  </div>
</template>

<script>
  import UserForm from '@/components/UserForm.vue'

  export default {
    name: "edit-page",
    components: {
      UserForm
    },
    data() {
      return {
        user: {
          input: {
            name: {
              value: '',
              placeholder: 'Name'
            },
            email: {
              value: '',
              placeholder: 'Email'
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

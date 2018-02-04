<template>
  <table class="table table-bordered table-hover">
    <thead>
    <tr>
      <th>ID</th>
      <th>Avatar</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Active</th>
      <th>Balance</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Registered</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{user.id}}</td>
      <td><img :src="user.picture" alt="" class="rounded-circle avatar"></td>
      <td>{{user.firstName}}</td>
      <td>{{user.lastName}}</td>
      <td>{{user.isActive}}</td>
      <td>{{user.balance}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.registered}}</td>
      <td class="text-right">
        <router-link :to="`/user/${user.id}`" class="btn btn-primary btn-sm">edit</router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      users: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .avatar {
    width: 32px;
    height: 32px;
  }
</style>

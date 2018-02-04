<template>
  <table class="table table-hover number-reset">
    <thead>
    <tr>
      <th>#</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Active</th>
      <th>Balance</th>
      <th>Email</th>
      <th>Phone</th>
      <th colspan="2">Registered</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <td class="number"></td>
      <td>{{user.firstName}} </td>
      <td>{{user.lastName}}</td>
      <td>{{user.isActive}}</td>
      <td>{{user.balance}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.registered}}</td>
      <td>
        <router-link :to="`/user/${user.id}`" class="btn btn-primary">edit</router-link>
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
  .number-reset {
    counter-reset: item;
  }

  .number:after {
    content: counter(item);
    counter-increment: item;
  }
</style>

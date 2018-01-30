<template>
  <table class="table table-hover number-reset">
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.id">
      <td class="number"></td>
      <td>{{user.firstName}} {{user.lastName}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
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

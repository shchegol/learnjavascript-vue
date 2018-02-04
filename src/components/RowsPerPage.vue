<template>
  <div>
    <select :value="value" @change="changed($event.target.value)" class="form-control">
      <option v-for="item in list" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'rows-per-page',
    props: {
      value: {
        type: Number,
        require: true
      }
    },
    data () {
      return {
        list: [2, 5, 10, 60]
      }
    },
    methods: {
      changed(value) {
        this.$emit('input', value)
      }
    }
  }
</script>

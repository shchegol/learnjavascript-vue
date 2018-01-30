<template>
    <form>
        <div class="form-row">
            <div class="form-group col">
                <input type="text" v-model="user.input.name.value" :placeholder="user.input.name.placeholder" class="form-control"/>
            </div>
            <div class="form-group col">
                <input type="text" v-model="user.input.email.value" :placeholder="user.input.email.placeholder" class="form-control"/>
            </div>
            <div class="form-group col-auto">
                <button type="button" class="btn btn-primary">Add user</button>
            </div>
        </div>
    </form>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>

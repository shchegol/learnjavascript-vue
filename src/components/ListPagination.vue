<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination m-0">
      <li class="page-item disabled">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li v-for="item in items" :key="user.id">
        a
      </li>

      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>

      <!--<li class="page-item disabled">-->
      <!--<a class="page-link" href="#" aria-label="Previous">-->
      <!--<span aria-hidden="true">&laquo;</span>-->
      <!--<span class="sr-only">Previous</span>-->
      <!--</a>-->
      <!--</li>-->
      <!--<li class="page-item active"><a class="page-link" href="#">1</a></li>-->
      <!--<li class="page-item"><a class="page-link" href="#">2</a></li>-->
      <!--<li class="page-item"><a class="page-link" href="#">3</a></li>-->
      <!--<li class="page-item">-->
      <!--<a class="page-link" href="#" aria-label="Next">-->
      <!--<span aria-hidden="true">&raquo;</span>-->
      <!--<span class="sr-only">Next</span>-->
      <!--</a>-->
      <!--</li>-->
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'rows-per-page',
    props: {
      value: {
        type: Number,
        require: true
      },
      totalPage: {
        type: Number,
        require: true
      }
    },
    data () {
      return {}
    },
    methods: {
      changed (value) {
        this.$emit('input', value)
      }
    },
  }
</script>

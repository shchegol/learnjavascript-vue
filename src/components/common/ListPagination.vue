<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination m-0">
      <li class="page-item"  :class="{ disabled: page === 1 }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li v-for="item in maxPages" :key="item" :class="{ active: page === item }" class="page-item">
        <a @click.prevent="selectPage(item)" class="page-link">
          {{ item }}
        </a>
      </li>

      <li class="page-item"  :class="{ disabled: page === maxPages }">
        <a class="page-link" href="#" aria-label="Next"  @click.prevent="nextPage">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'rows-per-page',
    model: {
      prop: 'page'
    },
    props: {
      page: {
        type: Number,
        required: true
      },
      totalPage: {
        type: Number,
        required: true
      },
      perPage: {
        type: Number,
        required: true
      }
    },
    computed: {
      maxPages() {
        return Math.ceil(this.totalPage / this.perPage);
      }
    },
    methods: {
      nextPage() {
        const pageNum = this.page + 1;
        if (pageNum <= this.maxPages) {
          this.selectPage(pageNum);
        }
      },
      prevPage() {
        const pageNum = this.page - 1;
        if (pageNum > 0) {
          this.selectPage(pageNum);
        }
      },
      selectPage(page) {
        this.$emit('input', page);
      }
    }
  }
</script>

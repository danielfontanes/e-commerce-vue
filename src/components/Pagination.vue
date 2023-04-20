<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1);
      }
    },
  }
}
</script>

<style scoped>
.pagination{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.pagination span{
  width: 120px;
  text-align: center;
}
.pagination button{
  margin: 0;
}
</style>
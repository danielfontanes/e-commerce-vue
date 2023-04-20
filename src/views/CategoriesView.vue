<template>
  <main>
    <h1>CATEGORIES</h1>
    <Loading
        :active.sync="isLoading"
    />
    <div v-if="!isLoading">
      <div  v-if="categories.length > 0" class="categories-container">
        <CategoryCard v-for="(category, index) in categories" :key="index" :category="category" />
      </div>
      <div v-else>
        <p>No se pudieron cargar las categorías. Inténtelo de nuevo más tarde.</p>
      </div>
    </div>
  </main>
</template>
  
<script>
import loadingMixin from '@/mixins/loadingMixin.js';

export default {
  mixins: [loadingMixin],
  name: 'CategoriesView',
  components: {
    CategoryCard: () => import('@/components/cards/CategoryCard.vue')
  },
  data() {
    return {
      categories: {},
    }
  },
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => {
          this.categories = data;
        })
        .catch(error => {
          console.log('Error al obtener las categorias', error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  }

}
</script>
<style scoped>
.categories-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
@media screen and (max-width: 1450px) {
  #app main{
    width: auto;
  }
  .categories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
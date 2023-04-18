<template>
  <main>
    <h1>CATEGORIES</h1>
    <div class="categories-container">
      <CategoryCard v-for="(category, index) in categories" :key="index" :category="category" />
    </div>
  </main>
</template>
  
<script>
import CategoryCard from '@/components/cards/CategoryCard.vue'

export default {
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: {}
    }
  },
  mounted() {
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
          console.log(error);
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
</style>
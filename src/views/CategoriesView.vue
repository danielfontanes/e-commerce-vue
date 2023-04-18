<template>
  <main>
    <h1>CATEGORIES</h1>
    <div class="categories-container">
      <div v-for="(category, index) in categories" :key="index">
        <router-link :to="{ name: 'Products', params: {categoryName:category}}">
          <!-- TODO: Añadir imagenes -->
          <h2>{{ category }}</h2>
        </router-link>
      </div>
    </div>
  </main>
</template>
  
<script>
export default {
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

a {
  display:grid;
  place-items: center;
  border: 1px solid #D5D9D9;
  padding: 1rem;
  border-radius: var(--border-radius-m);
  aspect-ratio: 1;
  text-transform: capitalize;
}
a:hover{
  background-color: var(--accent-color);;
  color: white;
}
</style>
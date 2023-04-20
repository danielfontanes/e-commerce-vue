<template>
    <router-link :to="{ name: 'Products', params: { categoryName: category } }" class="category-card">
      <div class="category-image" :style="{ 'background-image': `url(${categoryImages[category].img})`, 'background-size': 'cover' }"></div>
      <h2>{{ categoryImages[category].name }}</h2>
    </router-link>
</template>

<script>
import categoriesMixin from '@/mixins/categoriesMixin.js';

export default {
  mixins: [categoriesMixin],
  name: 'CategoryCard',
  props: {
    category: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
a.category-card {
  display: grid;
  place-items: center;
  border: 1px solid var(--soft-color);
  padding: 1rem;
  border-radius: var(--border-radius-m);
  text-transform: capitalize;
}

a.category-card:hover {
  background-color: var(--accent-color);
  color: var(--primary-color);
}

.category-image{
  aspect-ratio: 1;
  width:200px;
  margin-bottom: 1rem;
  border-radius: 10px;
}

@media (max-width: 767px){
  .category-image{
    width:120px;
  }
  .category-card h2{
    font-size: 0.7rem;
  }
}
</style>
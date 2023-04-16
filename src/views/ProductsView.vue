<template>
  <main>
    <Breadcrumb />
    <h1>{{ this.categoryName }}</h1>
    <div v-if="products.length > 0" class="products-container">
      <div v-for="(product, index) in paginatedProducts" :key="index">
        <ProductCard 
          :product="product"
          :categoryName="categoryName"
        />
      </div>
    </div>
    <Pagination 
      v-if="products.length > 0"
      :currentPage.sync="currentPage"
      :totalPages="totalPages"
    />
    <div v-if="products == 0">
      <p>No hay productos disponibles para esta categoría</p>
    </div>
  </main>
</template>

<script>
import { mapMutations } from 'vuex';

import Pagination from '@/components/Pagination.vue';
import Breadcrumb from '@/components/navigation/Breadcrumb.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'ProductsView',
  components: {
    Pagination,
    Breadcrumb,
    ProductCard
  },
  props: {
    categoryName: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      products: [],
      currentPage: 1,
      itemsPerPage: 4,
    }
  },
  computed :{
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapMutations(['addProduct']),
    getProducts() {
      fetch(`https://dummyjson.com/products/category/${this.categoryName}`)
        .then(res => res.json())
        .then(data => {
          this.products = data.products;
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
}
</script>
<style scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  min-height: 790px;
}
.info-container{
  margin: 1rem;
}
</style>
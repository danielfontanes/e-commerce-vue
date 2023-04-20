<template>
  <main>
    <Breadcrumb />
    <h1>{{ categoryName ? categoryName : "Categoría" }}</h1>
    <Loading
        :active.sync="isLoading"
    />
    <div v-if="!isLoading">
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
    </div>
  </main>
</template>

<script>
import loadingMixin from '@/mixins/loadingMixin.js';

export default {
  mixins: [loadingMixin],
  name: 'ProductsView',
  components: {
    Pagination: () => import('@/components/Pagination.vue'),
    Breadcrumb: () => import('@/components/navigation/Breadcrumb.vue'),
    ProductCard: () => import('@/components/cards/ProductCard.vue')
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
      itemsPerPage: 3,
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
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      fetch(`https://dummyjson.com/products/category/${this.categoryName}`)
        .then(res => res.json())
        .then(data => {
          this.products = data.products;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  }
}
</script>
<style scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  gap: 1rem;
  margin: 4rem 0rem;
}

@media (max-width: 767px){
  .products-container{
    display: flex;
    flex-direction: column;
  }
}
</style>
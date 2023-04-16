<template>
   <!-- TODO: componetizar Product.vue Pagination.vue -->
  <main>
   <!-- TODO: Sustituir por Breadcrumbs.vue -->
    <div class="temp-go-back" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    </div>
    <h1>{{ this.categoryName }}</h1>
    <div v-if="products.length > 0" class="products-container">
      <div v-for="(product, index) in paginatedProducts" :key="index">
        <router-link :to="{ name: 'ProductDetail', params: { categoryName: categoryName, productId: product.id.toString()}}">
          <div class="img-container">
            <img :src="product.thumbnail" alt="">
          </div>
          <div class="info-container">
            <p>{{ product.title }}</p>
            <p>{{ product.brand }}</p>
          </div>
          <button @click="addProduct(product)">Añadir</button>
        </router-link>
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
import router from '@/router';
import { mapMutations } from 'vuex';

import Pagination from '@/components/Pagination.vue';

export default {
  name: 'ProductsView',
  components: {
    Pagination,
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
    goBack(){
      this.$router.go(-1);
    }
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
a{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid rgb(146, 146, 146);
  background-color: white;
  width: 380px;
  height: 380px;
}
.img-container{
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaeaea;
  border-radius: 4px;
  margin-bottom: 1rem;
}
img{
  max-width: 100%;
  max-height: 100%;
}
.info-container{
  margin: 1rem;
}
.temp-go-back{
  border: 1px solid gray;
  border-radius: 100%;
  width: fit-content;
  padding: 1rem;
  background-color: var(--accent-color);
  color: white;
  cursor: pointer;
}
.temp-go-back svg{
  width: 2rem;
}
</style>
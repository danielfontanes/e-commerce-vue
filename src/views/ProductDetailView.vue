<template>
  <main>
    <Breadcrumb />
    <Loading
      :active.sync="isLoading"
    />
    <div v-if="!isLoading">
      <div v-if="Object.keys(this.product).length > 0" class="d-flex gap-5">
        <ImagesViewer
          :images="product.images" 
        />
        <div class="info-container">
          <h1 class="text-capitalize">{{ product.title }}</h1>
          <p class="text-capitalize">{{ product.brand }}</p>
          <p>{{ product.description }}</p>
          <Rating
            :ratingValue="product.rating"
            class="pb-4 mb-4 border-bottom"
          />
          <div class="money">
            <p class="product-price text-decoration-line-through">{{ `${product.price}€` }} </p>
            <p class="product-price-whit-discount">{{ `${discountedPrice}€` }} </p>
            <p>{{ `${product.discountPercentage}%` }}</p>
          </div>
          <p>Only <span class="items fw-bold">{{ `${product.stock} items` }}</span> left</p>
          <button 
            @click="addProduct(product)"
            class="m-0 mt-2 w-50"
            >
          Añadir</button>
        </div>
      </div>
      <div v-else>
        <p>Fallo en la carga del producto. Intentelo de nuevo más tarde.</p>
      </div>
    </div>

  </main>
</template>

<script>
import { mapMutations } from 'vuex';

import loadingMixin from '@/mixins/loadingMixin.js';

import Rating from '@/components/Rating.vue';
import ImagesViewer from '@/components/ImagesViewer.vue';
import Breadcrumb from '@/components/navigation/Breadcrumb.vue'

export default {
  mixins: [loadingMixin],
  name: 'ProductDetailView',
  components: {
    Rating,
    ImagesViewer,
    Breadcrumb,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: {},
    }
  },
  computed: {
    discountedPrice() {
      const discount = this.product.discountPercentage / 100;
      const priceWithDiscount = this.product.price - (this.product.price * discount);
      return priceWithDiscount.toFixed(2);
    },
  },
  created() {
    this.getProduct();
  },
  methods: {
    ...mapMutations( 'cart', ['addProduct']),
    getProduct() {
      fetch(`https://dummyjson.com/products/${this.productId}`)
        .then(res => res.json())
        .then(data => {
          this.product = data;
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
.info-container{
  width:500px;
  height: 500px;  
}
.info-container p{
  margin-bottom: 1rem;
}

.info-container .money{
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--soft-color);
}

.product-price-whit-discount,
.info-container .items{
  color: var(--accent-color);
}
.product-price{
  color: var(--text-soft-color);
}
</style>
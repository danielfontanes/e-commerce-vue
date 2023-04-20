<template>
  <div class="cart-product-preview">
    <div class="quantity">
      <button @click="incrementProduct(product)" class="btn-add">+</button>
      <p>{{ product.quantity }}</p>
      <button @click="decrementProduct(product)" class="btn-des">-</button>
    </div>
    <div class="cart-product-preview-image-continer">
      <img :src="product.thumbnail" alt="">
    </div>
    <p class="product-title">{{ product.title }}</p>
    <p>{{ `${discountedPrice}€` }}</p>
    <button @click="removeProduct(product)" class="btn-delete-product">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
 name:'ItemCartPreview',
 props: {
  product: {
    type: Object,
    required: true
  }
 },
 computed: {
    discountedPrice() {
      const discount = this.product.discountPercentage / 100;
      const priceWithDiscount = this.product.price - (this.product.price * discount);
      return priceWithDiscount.toFixed(2);
    },
  },
  methods: {
    ...mapMutations('cart', ['incrementProduct', 'decrementProduct', 'removeProduct'])
  }
}
</script>

<style scoped>
.cart-product-preview {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 1rem;
  width: 500px;
  border: 1px solid var(--soft-color);
  padding: 1rem;
  border-radius: 10px;
  color: black;
  height: 100px;
}
.cart-product-preview-image-continer{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--soft-color-bg);
}
.cart-product-preview-image-continer img{
  max-width: 100%;
  max-height: 100%;
}
.quantity,
.quantity p{
  text-align: center;
}
.btn-delete-product{
  padding:0;
  margin: 0;
  background-color: transparent;
  color: red;
}
.btn-delete-product:hover{
  background-color: transparent;
}
.btn-delete-product svg{
  height: 2rem;
}
.btn-add{
  padding:0;
  margin: 0;
  background-color: transparent;
  color: green;
  font-weight: bold;
  font-size: 1.5rem;
}
.btn-des{
  padding:0;
  margin: 0;
  background-color: transparent;
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
}
.product-title {
  grid-column: span 2;
}
</style>
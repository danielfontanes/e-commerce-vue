<template>
  <div class="product-card" @click="navigateToProductDetail">
    <div class="img-container">
      <img :src="product.thumbnail" alt="">
    </div>
    <div class="info-container">
      <div>
        <p class="fw-bold text-capitalize">{{ product.title }}</p>
        <p>{{ product.brand }}</p>
      </div>
      <div class="product-price text-capitalize">
        <p>{{ discountedPrice }}€</p>
        <p class="product-price-with-discount text-decoration-line-through">{{ `${product.price}€` }} </p>
      </div>
    </div>
    <button @click.stop="addProduct(product)">Añadir</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProductsView',
  props: {
    product: {
      type: Object,
      required: true
    },
    categoryName: {
      type: String,
      required: true,
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
    ...mapMutations('cart',['addProduct']),
    navigateToProductDetail(){
      this.$router.push({ name: 'ProductDetail', params: { categoryName: this.categoryName, productName: this.product.title, productId: this.product.id.toString() } })
    },
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid var(--soft-color);
  width: 370px;
  height: 380px;
}
.product-card .img-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--soft-color-bg);
  border-radius: 4px;
  margin-bottom: 1rem;
}
.product-card .info-container{
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  height: 100%;
}
.product-card .info-container .product-price{
  font-size: 2rem;
  color: var(--accent-color);
}
.product-card img {
  max-width: 100%;
  max-height: 100%;
}
.product-price-with-discount{
  font-size: 1rem;
  color: var(--text-soft-color);
  text-align: end;
}
@media (max-width: 767px){
  .product-card{
    width: 100%;
  }
}
</style>
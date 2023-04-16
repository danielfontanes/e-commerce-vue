<template>
  <router-link
    :to="{ name: 'ProductDetail', params: { categoryName: categoryName, productName: product.title, productId: product.id.toString() } }">
    <div class="img-container">
      <img :src="product.thumbnail" alt="">
    </div>
    <div class="info-container">
      <p>{{ product.title }}</p>
      <p>{{ product.brand }}</p>
    </div>
    <button @click="addProduct(product)">Añadir</button>
  </router-link>
</template>

<script>
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
  }
}
</script>

<style scoped>
.img-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaeaea;
  border-radius: 4px;
  margin-bottom: 1rem;
}
img {
  max-width: 100%;
  max-height: 100%;
}
a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid rgb(146, 146, 146);
  background-color: white;
  width: 380px;
  height: 380px;
}
</style>
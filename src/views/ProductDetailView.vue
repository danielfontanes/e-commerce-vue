<template>
  <main v-if="Object.keys(product).length">
    <div class="breadcrumb-e-commerce">
      <a href="">{{ "Categorias" }}</a>
      <span> / </span>
      <a href="">{{ "Categoria" }}</a>
      <span> / </span>
      <a href="">{{ "Producto" }}</a>
    </div>
    <div class="d-flex gap-3">
      <div class="images-container">
        <div class="main-image">
          <svg v-show="product.images && imageNumber > 0" @click="previousImage" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 previous-image">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <img :src="product.images[imageNumber]" alt="">
          <svg v-show="product.images && imageNumber < product.images.length - 1" @click="nextImage"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 next-image">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div class="images-preview">
          <div v-for="(productImage, index) in product.images">
            <img @click="changeImage(index)" :src="productImage" alt="">
          </div>
        </div>
      </div>
      <div class="info-container">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <button @click="addProduct(product)">Añadir</button>
      </div>
    </div>

  </main>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProductDetailView',
  props: {
    productId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      product: {},
      imageNumber: 0
    }
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    ...mapMutations(['addProduct']),
    getProduct() {
      fetch(`https://dummyjson.com/products/${this.productId}`)
        .then(res => res.json())
        .then(data => {
          this.product = data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    nextImage() {
      this.imageNumber++;
    },
    previousImage() {
      this.imageNumber--;
    },
    changeImage(index){
      console.log(index);
      this.imageNumber = index;
    }
  }
}
</script>

<style scoped>
.images-container{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
}
.main-image{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #F6F6F6;
  border-radius: 0.5rem;
  overflow: hidden;
}
.main-image svg {
  width: 3rem;
  position: absolute;
  bottom: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  padding: 0.5rem;
  margin: 0.5rem
}
.main-image img{
  max-height: 100%;
  max-width: 100%;
  width:100%;
  object-fit: contain;
}
.images-preview{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.images-preview > div{
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  background-color: #F6F6F6;
  border-radius: 0.5rem;
  overflow: hidden;
}
.images-preview > div img{
  max-height: 100%;
  max-width: 100%;
  width:100%;
}
.previous-image {
  left: 0px;
}
.next-image {
  right: 0px;
}

.info-container{
  width:500px;
  height: 500px;  
}


/* TODO: Poner en componente Breadcrumb.vue */
.breadcrumb-e-commerce {
  display: flex;
  margin: 2rem 0rem;
}
</style>
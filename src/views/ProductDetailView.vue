<template>
  <main v-if="Object.keys(product).length">
    <Breadcrumb />

    <div class="d-flex gap-5">
      <ImagesViewer
        :images="product.images" 
      />
      <div class="info-container">
        <h1>{{ product.title }}</h1>
        <p class="text-capitalize">{{ product.brand }}</p>
        <p>{{ product.description }}</p>
        <Rating
          :ratingValue="product.rating"
          class="pb-3 mb-3 border-bottom"
        />
        <div class="money">
          <p>{{ `${product.price}€` }} </p>
          <p>{{ `${product.discountPercentage}%` }}</p>
        </div>
        <p>Only <span class="items">{{ `${product.stock} items` }}</span> left</p>
        <!-- La categoria no la pongo porque ya aparece en las migas de pan -->
        <button @click="addProduct(product)">Añadir</button>
      </div>
    </div>

  </main>
</template>

<script>
import { mapMutations } from 'vuex';
import Rating from '@/components/Rating.vue';
import ImagesViewer from '@/components/ImagesViewer.vue';
import Breadcrumb from '@/components/navigation/Breadcrumb.vue'

export default {
  name: 'ProductDetailView',
  components: {
    Rating,
    ImagesViewer,
    Breadcrumb
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
  }
}
</script>

<style scoped>
.info-container{
  width:500px;
  height: 500px;  
  text-align: start;
}
.info-container p{
  margin-bottom: 1rem;
}

.info-container .money{
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid lightgray;
}
.info-container .money p{
  margin: 0px;
}
.info-container .items{
  font-weight: bold;
  color: var(--accent-color);
}
.info-container button{
  margin: 0;
  margin-top: 2rem;
  width: 50%;
}
</style>
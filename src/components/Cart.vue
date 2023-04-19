<template>
  <div class="cart-container">
    <div @click="showDropdown = !showDropdown" class="cart-svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      <div class="cart-number">{{ totalProductsInCart }}</div>
    </div>
    <div v-show="showDropdown" class="dropdown-cart">
      <div v-if="cart.length > 0">
        <div v-for="(product, index) in cart" :key="index">
          <ItemCartPreview :product="product"/>
        </div>
      </div>
      <div v-else>
        <p class="empty-cart">Carro vacío</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ItemCartPreview from '@/components/ItemCartPreview.vue'

export default {
  name:'Cart',
  components: {
    ItemCartPreview
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  computed: {
    ...mapState( 'cart', ['cart']),
    ...mapGetters( 'cart', ['totalProductsInCart'])
  },
}
</script>

<style scoped>
.cart-container {
  position: relative;
  color: var(--accent-color);
}
.cart-svg-container:hover svg,
.cart-svg-container:hover .cart-number{
  color: var(--accent-color-hover);
  cursor: pointer;
}
.cart-number {
  position: absolute;
  text-align: center;
  width: 2rem;
  top: 18px;
  right: 12px;
}
.cart-container svg {
  width: 4rem;
}

.dropdown-cart{
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  right: 0;
  padding: 1rem;
  background-color: white;
  border: 1px solid var(--soft-color);
  border-radius: var(--border-radius-m);
  max-height: 50vh;
  overflow-y: auto;
}
.empty-cart{
  width: 100px;
  text-align: center;
}
</style>
<template>
  <main class="about">
    <h1>This is an categorías page</h1>
    <div v-for="(zapatilla, index) in zapatillas" :key="index">
      <p>{{zapatilla.name}}</p>
      <p>{{zapatilla.brand}}</p>
      <p>{{zapatilla.category}}</p>
      <button @click="addProduct(zapatilla)">ADD CART</button>
    </div>
  </main>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      zapatillas: [
        { name: 'puma33', brand: 'puma', category: 'zapatillas' },
        { name: 'adidas air', brand: 'adidas', category: 'zapatillas' }
      ]
    }
  },
  methods: {
    ...mapMutations(['addProduct'])
  }
}
</script>
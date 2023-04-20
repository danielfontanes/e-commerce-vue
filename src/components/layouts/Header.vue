<template>
  <header>
    <div class="header-container">
      <img src="@/assets/images/logo.png" alt="imagen del logo">
      <p>👋😁 Hola <span>{{ user.username }}</span></p>
      <Cart />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name:'Header',
  components: {
    Cart: () => import('@/components/Cart.vue')
  },
  computed: {
    ...mapState('user', ['user']),
  },
}
</script>

<style scoped>
header {
  border-bottom: 1px solid var(--soft-color);
  margin: 0.5rem 2rem;
}

.header-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
.header-container span {
  color: var(--accent-color);
}
.header-container img {
  height: 100%;
}

@media screen and (max-width: 1450px) {
  .header-container {
    width: auto;
  }
  .header-container img{
    width: 100px;
    height: auto;
  }
}
</style>
<template>
  <div v-if="user && user.address" class="user-adress-info">
    <div class="d-flex align-items-center mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      <h2 class="fw-bold fs-5">Dirección</h2>
    </div>
    <div>
      <div class="d-flex">
        <div class="w-50">
          <p><span>Dirección: </span>{{ user.address.address }}</p>
          <p><span>Ciudad: </span>{{ user.address.city }}</p>
        </div>
        <div class="w-50">
          <p><span>Estado: </span>{{ user.address.state }}</p>
          <p><span>Código postal: </span>{{ user.address.postalCode }}</p>
        </div>
      </div>
      <Map :lat="13" :lng="14" class="mt-4" />
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex';

import Map from '../Map.vue';

export default {
  name: "UserAdress",
  components: {
    Map
  },
  computed: {
    ...mapState(['user']),
  },
}

</script>

<style scoped>
span {
  font-weight: bold;
}

svg {
  width: 1.25rem;
  margin-right: 0.5rem;
}
</style>
<template>
  <div v-if="user && user.company" class="user-company-info">
    <div>
      <div class="d-flex align-items-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
        <h2 class="fw-bold fs-5">Compañía</h2>
      </div>
      <div class="d-flex">
        <div class="w-50">
          <p><span>Nombre de la compañía: </span>{{ user.company.name }}</p>
          <p><span>Departamento: </span>{{ user.company.department }}</p>
          <p><span>Título: </span>{{ user.company.title }}</p>
        </div>
        <div class="w-50">
          <p><span>Dirección: </span>{{ user.company.address.address }}</p>
          <p><span>Ciudad: </span>{{ user.company.address.city }}</p>
          <p><span>Código postal: </span>{{ user.company.address.postalCode }}</p>
          <p><span>Estado: </span>{{ user.company.address.state }}</p>
        </div>
      </div>
      <Map 
        :lat="13" 
        :lng="14" 
        class="mt-4" 
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserCompany',
  components: {
    Map: () => import('@/components/Map.vue')
  },
  computed: {
    ...mapState( 'user', ['user']),
  },
}
</script>

<style scoped>
.user-company-info span {
  font-weight: bold;
}
.user-company-info svg {
  width: 1.25rem;
  margin-right: 0.5rem;
}
</style>
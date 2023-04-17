<template>
 <div class="user-company-info">
            <p><span>Nombre de la compañía: </span>{{ user.company.name }}</p>
            <p><span>Departamento: </span>{{ user.company.department }}</p>
            <p><span>Título: </span>{{ user.company.title }}</p>
            <p><span>Dirección: </span>{{ user.company.address.address }}</p>
            <p><span>Ciudad: </span>{{ user.company.address.city }}</p>
            <p><span>Latitud: </span>{{ user.company.address.coordinates.lat }}</p>
            <p><span>Longitud: </span>{{ user.company.address.coordinates.lng }}</p>
            <p><span>Código postal: </span>{{ user.company.address.postalCode }}</p>
            <p><span>Estado: </span>{{ user.company.address.state }}</p>
          </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "UserCompany",
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
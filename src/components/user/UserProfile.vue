<template>
<div class="user-primary-info">
          <div class="user-img-container mb-4">
            <img :src="user.image" alt="">
          </div>
          <section class="border-bottom pb-3 mb-3">
            <h2 class="fw-bold fs-5 mb-2">Información personal</h2>
            <p><span>Nombre: </span>{{ user.firstName }}</p>
            <p><span>Apellido: </span>{{ user.lastName }}</p>
            <p><span>Apellido de Soltera: </span>{{ user.maidenName }}</p>
          </section>
          <section class="border-bottom pb-3 mb-3">
            <h2 class="fw-bold fs-5 mb-2">Contacto</h2>
            <p><span>Email: </span>{{ user.email }}</p>
            <p><span>Teléfono: </span>{{ user.phone }}</p>
          </section>
          <section class="border-bottom pb-3 mb-3">
            <h2 class="fw-bold fs-5 mb-2">Información de la cuenta</h2>
            <p><span>Nombre de usuario: </span>{{ user.username }}</p>
            <p><span>Contraseña: </span>{{ user.password }}</p>
          </section>
          <section class="pb-3 mb-3">
            <h2 class="fw-bold fs-5 mb-2">Información adicional</h2>
            <p><span>Fecha de nacimiento: </span>{{ user.birthDate }}</p>
            <p><span>Edad: </span>{{ user.age }}</p>
            <p><span>Género: </span>{{ user.gender }}</p>
            <p><span>Grupo sanguíneo: </span>{{ user.bloodGroup }}</p>
            <div class="mb-2 mt-2">
              <h3 class="fw-bold fs-6 mb-2">Información física</h3>
              <p><span>Altura: </span>{{ user.height }}</p>
              <p><span>Peso: </span>{{ user.weight }}</p>
              <p><span>Color de ojos: </span>{{ user.eyeColor }}</p>
              <p><span>Cabello: </span>{{ user.hair.color }} ({{ user.hair.type }})</p>
            </div>
          </section>
        </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name:"UserProfile",
  computed: {
      ...mapState(['user']),
    },
}
</script>

<style scoped>
span {
  font-weight: bold;
}
.user-img-container {
  border: 1px solid gray;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
}
.user-img-container img {
  width: 100%;
  background-color: lightgray;
}

</style>
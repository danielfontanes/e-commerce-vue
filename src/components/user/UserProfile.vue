<template>
  <div v-if="user" class="user-primary-info">
    <div class="user-img-container mb-5">
      <img :src="user.image" alt="">
    </div>
    <section class="border-bottom pb-3 mb-3">
      <div class="d-flex align-items-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <h2 class="fw-bold fs-5">Información Personal</h2>
      </div>
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
      <div class="mt-2">
        <h3 class="fw-bold fs-6 mb-1">Información física</h3>
        <p><span>Altura: </span>{{ user.height }}</p>
        <p><span>Peso: </span>{{ user.weight }}</p>
        <p><span>Color de ojos: </span>{{ user.eyeColor }}</p>
        <div v-if="user.hair" class="mt-2">
          <h4 class="fw-bold mb-1">Cabello</h4>
          <p><span>Color: </span>{{ user.hair.color }}</p>
          <p><span>Typo: </span>{{ user.hair.type }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "UserProfile",
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
.user-img-container {
  border: 1px solid gray;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
  width: 70%;
  margin: 0 auto;
}

.user-img-container img {
  width: 100%;
  background-color: lightgray;
}
</style>
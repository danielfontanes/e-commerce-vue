<template>
  <nav>
    <button @click="menuCerrado = !menuCerrado">
      <svg v-if="menuCerrado" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd"
          d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
          clip-rule="evenodd" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd"
          d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <router-link :class="{ 'justify-content-center': menuCerrado }" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path
          d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path
          d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
      <p :class="{ 'd-none': menuCerrado }" class="ms-2">Home</p>
    </router-link>
    <router-link :class="{ 'justify-content-center': menuCerrado }" to="/categorias">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd"
          d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
          clip-rule="evenodd" />
      </svg>
      <p :class="{ 'd-none': menuCerrado }" class="ms-2">Categorías</p>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuCerrado: true,
    }
  }
}

</script>

<style scoped>
svg {
  width: 2rem;
  color: var(--accent-color);
}

nav {
  padding: 30px;
  background-color: var(--primary-color);
  color: var(--accent-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border-right: 1px solid var(--soft-color);
}

nav a {
  font-weight: bold;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
}


nav a.router-link-exact-active,
nav a.router-link-exact-active svg,
nav a:hover ,
nav a:hover svg,
nav button:hover {
  color: var(--accent-color-hover);
  fill: var(--accent-color-hover);
}
nav a:hover{
  border-radius: 1rem;
  border: 1px solid var(--accent-color-hover);
}

nav button:hover{
  background-color: transparent;
}
button {
  background-color: transparent;
  border: none;
  padding: 1rem;
  margin: 0rem 0rem 1rem 0rem;
}</style>
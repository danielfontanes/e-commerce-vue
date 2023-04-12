<template>
  <div id="app">
    <SideMenu />
    <div class="main-container">
      <Header />
      <router-view class="flex-grow-1" />
      <footer>FOOTER</footer>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/layouts/SideMenu.vue'
import Header from '@/components/layouts/Header.vue'

export default {
  name: 'App',
  components: {
    SideMenu,
    Header
  }
}
</script>

<style>
/* IMPORTS */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('@/assets/styles/resetStyles.css');


/* VARIABLES */
:root {
  --primary-color: #ffffff;
  --secondary-color: #41B883;
  --teciariary-color: #35495E;
}

/* GENERAL STYLES */
a {
  text-decoration: none;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
}

.main-container {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  min-height: 99.97vh;
}

#app footer {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

#app>div {
  flex-grow: 1;
}</style>


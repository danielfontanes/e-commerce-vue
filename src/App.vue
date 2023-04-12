<template>
  <div id="app">
    <SideMenu />
    <div class="main-container">
      <Header />
      <router-view class="flex-grow-1" />
      <Footer />
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/layouts/SideMenu.vue'
import Header from '@/components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    SideMenu,
    Header,
    Footer
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
  --secondary-color: #787878;
  --teciariary-color: #464646;
  --accent-color: #00A69C;
  
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
  width: 100%;
  flex-direction: column;
}
</style>


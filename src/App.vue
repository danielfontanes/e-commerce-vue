<template>
  <div id="app">
    <SideMenu />
    <div class="main-container">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import SideMenu from '@/components/navigation/SideMenu.vue'
import Header from '@/components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    SideMenu,
    Header,
    Footer,
  },
  created() {
    this.getUser();
  },
  methods: {
    ...mapMutations( 'user', ['loginUser']),
    getUser() {
      fetch('https://dummyjson.com/users/1')
        .then(res => res.json())
        .then(data => {
          this.loginUser(data);
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
}
</script>

<style>
/* IMPORTS */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('@/assets/styles/resetStyles.css');


/* VARIABLES */
:root {
  /* Colors */
  --primary-color: #ffffff;
  --secondary-color: #787878;
  --teciariary-color: rgb(70, 70, 70);
  --accent-color: #00A69C;
  --accent-color-hover: #00c9bc;
  --soft-color: lightgray;
  --soft-color-bg: #F6F6F6;

  --text-soft-color: gray;
  
  /* Radius */
  --border-radius-m: 1rem;
}

/* STYLES App.vue */
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


/* GENERAL STYLES */
* {
  text-align: start;
}
a {
  text-decoration: none;
  color: inherit;
}

#app main {
  padding: 1rem;
  width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
}
#app h1{
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

button{
  text-align: center;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: 4px;
  border: 0px;
  padding: 1rem;
  margin: 1rem;
}
button:hover{
  background-color: var(--accent-color-hover);
}
</style>


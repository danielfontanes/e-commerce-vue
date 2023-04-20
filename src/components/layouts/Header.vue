<template>
  <header>
    <div class="header-container">
      <div @click="showDropdown = !showDropdown" class="mobile-menu">
        <img src="@/assets/images/logo.png" alt="imagen del logo">
        <nav v-show="showDropdown">
          <ul class="d-flex flex-column gap-2">
            <li>
              <router-link to="/" class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <p class="ms-2">Home</p>
              </router-link>
            </li>
            <li>
              <router-link to="/categorias" class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd"
                    d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                    clip-rule="evenodd" />
                </svg>
                <p class="ms-2">Categorías</p>
              </router-link>
            </li>

          </ul>
        </nav>
      </div>
      <p>👋😁 Hola <span>{{ user.username }}</span></p>
      <Cart />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  components: {
    Cart: () => import('@/components/Cart.vue')
  },
  computed: {
    ...mapState('user', ['user']),
  },
  data() {
    return {
      showDropdown: false
    }
  }
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

.mobile-menu nav {
  display: none;
}

@media screen and (max-width: 1450px) {
  header {
    margin: 0.5rem 1rem;
  }

  .header-container {
    width: auto;
    height: 75px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }

  .header-container p {
    grid-column: span 2;
  }

  .header-container img {
    width: 100px;
    height: auto;
  }

  .mobile-menu {
    position: relative;
  }

  .mobile-menu nav {
    position: absolute;
    display: flex;
    background-color: var(--primary-color);
    border-radius: 10px;
    border: 1px solid var(--soft-color);
  }

  .mobile-menu nav {
    padding: 1rem;
  }

  .mobile-menu svg {
    width: 2rem;
    color: var(--accent-color);
  }
  .mobile-menu p{
    color: var(--accent-color);
  }

}
</style>
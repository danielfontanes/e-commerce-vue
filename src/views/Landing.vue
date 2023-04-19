<template>
  <main class="home">
    <!-- USER INFO -->
    <Loading
        :active.sync="isLoading"
      />
    <div
      v-if="!isLoading" 
      class="user-info d-flex flex-column gap-4"
    >
      <div class="quote">
        <blockquote>
          <p>{{ quote.quote }}</p>
          <cite>{{ quote.author }}</cite>
        </blockquote>
      </div>

      <div class="user-info-data gap-4">
        <div class="d-flex flex-column gap-4">
          <UserProfile class="card" />
          <UserBank class="card" />
        </div>
        <div class="d-flex flex-column gap-4 w-100">
          <UserAdress class="card h-100" />
          <UserCompany class="card h-100" />
        </div>
      </div>

      <div class="user-recomended-categories card">
        <div class="d-flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
          <h2 class="fw-bold fs-5">Categorías Recomendadas</h2>
        </div>
        <div class="user-recomended-categories-container">
          <CategoryCard v-for="(category, index) in categories" :key="index" :category="category" />
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import loadingMixin from '@/mixins/loadingMixin.js';

import UserProfile from '@/components/user/UserProfile.vue';
import UserAdress from '@/components/user/UserAdress.vue';
import UserBank from '@/components/user/UserBank.vue';
import UserCompany from '@/components/user/UserCompany.vue';
import CategoryCard from '@/components/cards/CategoryCard.vue';

import { mapState } from 'vuex';

export default {
  mixins: [loadingMixin],
  name: 'Landing',
  components: {
    UserProfile,
    UserAdress,
    UserBank,
    UserCompany,
    CategoryCard,
  },
  data() {
    return {
      quote: {},
      categories: []
    }
  },
  computed: {
    ...mapState(['user']),
  },
  created() {
    this.GetAllData();
  },
  methods: {
    GetAllData() {
      Promise.all([this.getQuote(), this.getCategories()])
        .then(([quote, categories]) => {
          this.quote = quote;
          // Simulo que me llegan las categorias recomendadas
          this.categories = categories.slice(0, 4);;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
  
    },
    getQuote() {
      return fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .catch(error => {
          console.log(error);
        });
    },
    getCategories() {
      return fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .catch(error => {
          console.log(error);
        });
    },
  }
}
</script>
<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 20px;
  padding: 2rem;
}

.user-info-data {
  display: flex;
}

.user-recomended-categories-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.user-recomended-categories svg {
  width: 1.25rem;
  margin-right: 0.5rem;
}

.home blockquote {
  font-style: italic;
  padding: 10px;
  border: 1px solid var(--soft-color);
  border-radius: 10px;
  background-color: lightblue;
}

.home cite {
  font-weight: bold;
  margin-top: 1rem;
}</style>

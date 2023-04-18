<template>
  <main class="home">
    <!-- USER INFO -->
    <div class="user-info d-flex flex-column gap-4">
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

      <div class="card">
        <h2 class="fw-bold fs-5 mb-2">Categorías Recomendadas</h2>
        <div class="user-recomended-categories">
          <CategoryCard v-for="(category, index) in categories" :key="index" :category="category" />
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import UserProfile from '@/components/user/UserProfile.vue';
import UserAdress from '@/components/user/UserAdress.vue';
import UserBank from '@/components/user/UserBank.vue';
import UserCompany from '@/components/user/UserCompany.vue';
import CategoryCard from '@/components/cards/CategoryCard.vue';

import { mapState } from 'vuex';

export default {
  name: 'Landing',
  components: {
    UserProfile,
    UserAdress,
    UserBank,
    UserCompany,
    CategoryCard
  },
  data() {
    return {
      loading: true,
      quote: {},
      categories: []
    }
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
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
          this.loading = false;
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
.user-recomended-categories{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.user-info-data{
  display: flex;
}

blockquote {
  font-style: italic;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: lightblue;
}

cite {
  font-weight: bold;
  margin-top: 1rem;
}
</style>

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

      <div class="d-flex gap-4">
        <UserProfile/>
        <div class="d-flex flex-column gap-4">
          <UserAdress />
          <UserBank />
          <UserCompany />
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
        </div>
      </div>

      <div class="user-recomended-categories">
        <div v-for="(category, index) in categories" :key="index">
          <p>{{ category }}</p>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import UserProfile from '@/components/user/UserProfile.vue';
import UserAdress from '@/components/user/UserAdress.vue';
import UserBank from '@/components/user/UserBank.vue';

import { mapState } from 'vuex';

export default {
  name: 'Landing',
  components: {
    UserProfile,
    UserAdress,
    UserBank
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
.quote,
.user-primary-info,
.user-adress-info,
.user-bank-info,
.user-company-info,
.user-recomended-categories {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 20px;
  padding: 2rem;
}

svg {
  width: 2rem;
}

blockquote {
  font-style: italic;
  background-color: #f9f9f9;
  border-left: 5px solid #ccc;
  padding: 10px;
}
</style>

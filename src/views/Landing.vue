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

        <!-- TODO: Componetizar -->
        <div class="d-flex flex-column gap-4">
          <div class="user-adress-info">
            <div class="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <h2>Dirección</h2>
            </div>
            <p><span>Dirección: </span>{{ user.address.address }}</p>
            <p><span>Ciudad: </span>{{ user.address.city }}</p>
            <p><span>Latitud: </span>{{ user.address.coordinates.lat }}</p>
            <p><span>Longitud: </span>{{ user.address.coordinates.lng }}</p>
            <p><span>Código postal: </span>{{ user.address.postalCode }}</p>
            <p><span>Estado: </span>{{ user.address.state }}</p>
          </div>
          <div class="user-bank-info">
            <p><span>Fecha de vencimiento de la tarjeta: </span>{{ user.bank.cardExpire }}</p>
            <p><span>Número de tarjeta: </span>{{ user.bank.cardNumber }}</p>
            <p><span>Tipo de tarjeta: </span>{{ user.bank.cardType }}</p>
            <p><span>Moneda: </span>{{ user.bank.currency }}</p>
            <p><span>IBAN: </span>{{ user.bank.iban }}</p>
          </div>
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

import { mapState } from 'vuex';

export default {
  name: 'Landing',
  components: {
    UserProfile
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

span {
  font-weight: bold;
}

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

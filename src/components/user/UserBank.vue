<template>
  <div v-if="user && user.bank" class="user-bank-info">
    <div class="d-flex align-items-center mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
        className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
      <h2 class="fw-bold fs-5">Información Bancaria</h2>
    </div>
    <div>
      <div class="d-flex">
        <p class="w-50"><span>IBAN: </span>{{ user.bank.iban }}</p>
        <p class="w-50"><span>Moneda: </span>{{ user.bank.currency }}</p>
      </div>
      <BankCard :cardExpire="user.bank.cardExpire" :cardNumber="user.bank.cardNumber" :cardType="user.bank.cardType"
        class="mt-4" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BankCard from '@/components/BankCard.vue';

export default {
  name: 'UserBank',
  components: {
    BankCard
  },
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
</style>
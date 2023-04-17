<template>
  <div class="user-bank-info">
    <p><span>Fecha de vencimiento de la tarjeta: </span>{{ user.bank.cardExpire }}</p>
    <p><span>Número de tarjeta: </span>{{ user.bank.cardNumber }}</p>
    <p><span>Tipo de tarjeta: </span>{{ user.bank.cardType }}</p>
    <p><span>Moneda: </span>{{ user.bank.currency }}</p>
    <p><span>IBAN: </span>{{ user.bank.iban }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "UserBank",
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
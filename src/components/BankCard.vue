<template>
  <div class="card-image-container position-relative">
    <img src="@/assets/images/bank-card.jpg" alt="card-image" class="card-img">
    <p class="card-expire">{{ cardExpire }}</p>
    <p class="card-number">{{ cardNumber }}</p>
    <p class="card-type">{{ cardType }}</p>
  </div>
</template>

<script>
export default {
  name: 'BankCard',
  props: {
    cardExpire: {
      type: String,
      required: true
    },
    cardNumber: {
      type: String,
      required: true
    },
    cardType: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .card-img{
    width: 300px;
  }
  .card-expire{
    bottom: 45px;
    left: 110px;
  }
  .card-number{
    font-size: 1.25rem;
    color: white;
    text-shadow: -1px -1px 0px #333, 1px -1px 0px #333, -1px 1px 0px #333, 1px 1px 0px #333;
    top: 100px;
    left: 36px;
  }
  .card-type{
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
    top: 33px;
    left: 34px;
  }

  .card-expire,
  .card-number,
  .card-type{
    position: absolute;
    font-weight: bold;
   }
</style>
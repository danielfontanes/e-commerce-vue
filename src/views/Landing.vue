<template>
  <main class="home">
    <!-- USER INFO -->


    <!-- QUOTE -->
    <p>{{ quote.quote }}</p>
    <p>{{ quote.author }}</p>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Landing',
  data() {
    return {
      loading: true,
      quote: {}
    }
  },
  computed: {
    ...mapState(['user']),
  },
  mounted(){
    this.getQuote();
  },
  methods: {
    getQuote(){
      fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        this.quote = data;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>

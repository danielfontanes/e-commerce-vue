import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: {
    Loading: () => import('vue-loading-overlay'),
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
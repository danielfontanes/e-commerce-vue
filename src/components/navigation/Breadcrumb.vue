<template>
  <nav>
    <ul class="breadcrumb-e-commerce">
      <li v-for="(route, index) in processedRoutes" :key="index"
        :class="{ active: index === processedRoutes.length - 1 }">
        <router-link v-if="index !== processedRoutes.length - 1" :to="route.path">{{ route.name }}</router-link>
        <span v-else>{{ route.name }}</span>
        <svg v-if="index !== processedRoutes.length - 1" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
  computed: {
    processedRoutes() {
      const pathSegments = this.$route.path.split("/").filter((segment) => segment);
      let breadcrumbPath = "";

      return pathSegments.map((segment) => {
        breadcrumbPath += "/" + segment;
        const route = this.$router.resolve({ path: breadcrumbPath });

        return {
          name: decodeURIComponent(segment),
          path: route.route.path,
        };
      });
    },
  },
}
</script>


<style scoped>
.breadcrumb-e-commerce {
  display: flex;
  margin: 2rem 0rem;
  gap: 1rem;
}

.breadcrumb-e-commerce li {
  text-transform: capitalize;
  color: var(--text-soft-color);
  font-size: 0.9rem;
}
.breadcrumb-e-commerce svg{
  width: 0.9rem;
  margin-left: 1rem;
}
</style>
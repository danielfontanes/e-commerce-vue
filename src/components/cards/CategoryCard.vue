<template>
  <div>
    <router-link :to="{ name: 'Products', params: { categoryName: category } }">
      <div class="category-image" :style="{ 'background-image': `url(${categoryImages[category].img})`, 'background-size': 'cover' }"></div>
      <h2>{{ categoryImages[category].name }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      categoryImages: {
        smartphones: {
          name: "móviles",
          img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        laptops: {
          name: "portátiles",
          img: "https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        fragrances: {
          name: "fragancias",
          img: "https://images.pexels.com/photos/1961784/pexels-photo-1961784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        skincare: {
          name: "cuidado de la piel",
          img: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        groceries: {
          name: "comestibles",
          img: "https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "home-decoration": {
          name: "decoración del hogar",
          img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        furniture: {
          name: "muebles",
          img: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        tops: {
          name: "camisetas",
          img: "https://images.pexels.com/photos/5698856/pexels-photo-5698856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "womens-dresses": {
          name: "vestidos de mujer",
          img: "https://images.pexels.com/photos/8916600/pexels-photo-8916600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "womens-shoes": {
          name: "zapatos de mujer",
          img: "https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "mens-shirts": {
          name: "camisas de hombre",
          img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "mens-shoes": {
          name: "zapatos de hombre",
          img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "mens-watches": {
          name: "relojes de hombre",
          img: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "womens-watches": {
          name: "relojes de mujer",
          img: "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "womens-bags": {
          name: "bolsos de mujer",
          img: "https://images.pexels.com/photos/1039518/pexels-photo-1039518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        "womens-jewellery": {
          name: "joyería de mujer",
          img: "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        sunglasses: {
          name: "gafas de sol",
          img: "https://images.pexels.com/photos/15674502/pexels-photo-15674502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        automotive: {
          name: "automotriz",
          img: "https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        motorcycle: {
          name: "motocicletas",
          img: "https://images.pexels.com/photos/15208152/pexels-photo-15208152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        lighting: {
          name: "iluminación",
          img: "https://images.pexels.com/photos/2333855/pexels-photo-2333855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      }
    }
  }
}
</script>

<style scoped>
a {
  display: grid;
  place-items: center;
  border: 1px solid #D5D9D9;
  padding: 1rem;
  border-radius: var(--border-radius-m);
  text-transform: capitalize;
}

a:hover {
  background-color: var(--accent-color);
  ;
  color: white;
}

.category-image{
  aspect-ratio: 1;
  width:200px;
  margin-bottom: 1rem;
  border-radius: 10px;
}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Landing" */ '../views/Landing.vue'),
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "CategoriesView" */ '../views/CategoriesView.vue'),
  },
  {
    path: '/categorias/:categoryName',
    name: 'Products',
    component: () => import(/* webpackChunkName: "CategoriesView" */ '../views/ProductsView.vue'),
    props: true,
  },
  {
    path: '/categorias/:categoryName/:productName',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "ProductDetailView" */ '../views/ProductDetailView.vue'),
    props: true,
  }
  // TODO: 404 page
]

const router = new VueRouter({
  routes
})

export default router

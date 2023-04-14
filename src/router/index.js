import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categorias',
    name: 'Categorias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CategoriesView" */ '../views/CategoriesView.vue'),
  },
  {
    path: '/categorias/:categoryName',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "CategoriesView" */ '../views/ProductsView.vue'),
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import AllCards from '../views/AllCards.vue';
import YourCards from '../views/YourCards.vue';
import BlockedCards from '../views/BlockedCards.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'allCards',
    component: AllCards
  },
  {
    path: '/your',
    name: 'your-cards',
    component: YourCards
  },
  {
    path: '/blocked',
    name: 'blocked-cards',
    component: BlockedCards
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

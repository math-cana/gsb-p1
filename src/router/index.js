import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccueilView from '../views/AccueilView.vue'
import MedecinView from '../views/MedecinView.vue'
import RapportsView from '../views/RapportsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/medecin',
    name: 'medecin',
    component: MedecinView
  },
  {
    path: '/rapports',
    name: 'rapports',
    component: RapportsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

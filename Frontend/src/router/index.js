import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Fitur untuk scroll ke atas setiap pindah halaman
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    // RUTE DINAMIS BARU UNTUK HALAMAN DETAIL PROYEK
    {
      path: '/portfolio/:slug', // :slug adalah parameter dinamis
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue')
    }
    
  ]
})

export default router
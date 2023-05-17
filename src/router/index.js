import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1 from '../views/Pages/Page1.vue'
import Page2 from '../views/Pages/Page2.vue'
import Page3 from '../views/Pages/Page3.vue'
import Page4 from '../views/Pages/Page4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aufgabe1',
      name: 'Aufgabe 1',
      component: Page1,
    },
    {
      path: '/aufgabe2',
      name: 'Aufgabe 2',
      component: Page2,
    },
    {
      path: '/aufgabe3',
      name: 'Aufgabe 3',
      component: Page3,
    },
    {
      path: '/aufgabe4',
      name: 'Aufgabe 4',
      component: Page4,
    }
  ]
})

export default router

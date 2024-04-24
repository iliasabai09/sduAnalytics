import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/auth',
      name: 'auth',
      component: import('../pages/auth.vue')
    }
    /*  {
				path: '/about',
				name: 'about',
				// route level code-splitting
				// this generates a separate chunk (About.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import('../pages/AboutView.vue')
			}*/
  ]
})

export default router

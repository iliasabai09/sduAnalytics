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
    },
    {
      path: '/profile',
      name: 'profile',
      component: import('../pages/profile.vue'),
      children: [
        {
          path: 'info',
          name: 'profile-info',
          component: import('../pages/profile-info.vue')
        },
        {
          path: 'teachers',
          name: 'profile-teachers',
          component: import('../pages/profile-teachers.vue')
        },
        {
          path: 'plan',
          name: 'profile-plan',
          component: import('../pages/profile-plan.vue')
        },
        {
          path: 'grades',
          name: 'profile-grades',
          component: import('../pages/profile-grades.vue')
        },
        {
          path: 'courses',
          name: 'profile-courses',
          component: import('../pages/profile-courses.vue')
        }
      ]
    }
  ]
})

export default router

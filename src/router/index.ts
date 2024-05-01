import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/homePage.vue'
import ProfileInfo from '../pages/profile-info.vue'
import ProfileTeachers from '../pages/profile-teachers.vue'
import Profile from '../pages/profile.vue'
import ProfilePlan from '../pages/profile-plan.vue'
import ProfileGrades from '../pages/profile-grades.vue'
import ProfileCourses from '../pages/profile-courses.vue'
import Auth from '../pages/auth.vue'
import Aizere from '../pages/courses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/aizere',
      name: 'aizere',
      component: Aizere
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      children: [
        {
          path: 'info',
          name: 'profile-info',
          component: ProfileInfo
        },
        {
          path: 'teachers',
          name: 'profile-teachers',
          component: ProfileTeachers
        },
        {
          path: 'plan',
          name: 'profile-plan',
          component: ProfilePlan
        },
        {
          path: 'grades',
          name: 'profile-grades',
          component: ProfileGrades
        },
        {
          path: 'courses',
          name: 'profile-courses',
          component: ProfileCourses
        }
      ]
    }
  ]
})

export default router

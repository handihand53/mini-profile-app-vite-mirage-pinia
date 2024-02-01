import { createRouter, createWebHistory } from 'vue-router'

const UserProfile = () => import('../pages/UserProfile.vue')
const UserProfileDetail = () => import('../pages/UserProfileDetail.vue')
const NotFound = () => import('../pages/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/detail',
    name: 'UserProfileDetail',
    component: UserProfileDetail
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundCatchAll',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { useAuthStore } from '~/stores/authStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore()
  
  if (to.path === '/login' && store.isAuthenticated) {
    return navigateTo('/')
  }

  if (!store.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
})
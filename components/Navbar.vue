<script setup>
  import { useAuthStore } from '~/stores/authStore'
  const store = useAuthStore()

  const menu = [
    {
      name: 'Cart',
      path: '/cart'
    },
    {
      name: 'Notification',
      path: '/'
    },
    {
      name: 'Message',
      path: '/'
    },
  ]

  const handleLogout = () => {
    store.logout()
    navigateTo('/login')
  }
</script>

<template>
  <div class="fixed top-0 left-0 w-full py-4 bg-neutral-800 border-b-2 border-neutral-900">
    <div class="max-w-[1000px] w-5/6 mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <span class="text-yellow-400 text-xl font-[700]">Pokemon Store</span>
      </NuxtLink>

      <div class="max-w-[500px] w-full">
        <input type="text" class="text-input w-full bg-neutral-900" placeholder="Search pokemon">
      </div>

      <div class="flex gap-4 items-center">
        <div v-for="item in menu" :key="item.name">
          <NuxtLink :to="item.path">
            <span class="transition text-neutral-100 hover:text-yellow-400">{{ item.name }}</span>
          </NuxtLink>
        </div>
        <div 
          class="text-red-500 cursor-pointer"
          @click="handleLogout"
        >
          Logout
        </div>
      </div>
    </div>
  </div>
</template>
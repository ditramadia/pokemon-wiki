<script setup>
  import { useAuthStore } from '~/stores/authStore'
  const store = useAuthStore()

  const loading = ref(false)

  const user = ref({
    email: '',
    password: ''
  })

  const handleLogin = () => {
    loading.value = true
    setTimeout(async () => {
      store.login(user.value.email)
      loading.value = false
      await navigateTo('/')
    }, 2000)
  }
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="max-w-[400px] w-full">
      <h1 class="mb-8 text-center text-neutral-100 text-4xl font-[600]">Login</h1>
      <form @submit.prevent="handleLogin" class="flex flex-col gap-2">
        <input 
          type="email" 
          v-model="user.email" 
          placeholder="Email" 
          class="text-input"
          required
        />
        <input 
          type="password" 
          v-model="user.password" 
          placeholder="Password" 
          class="text-input"
          required
        />
        <button 
          type="submit"
          :disabled="loading"
          :class="`button mt-4 ${loading ? 'opacity-60 cursor-auto' : 'cursor-pointer'} bg-yellow-400 text-neutral-900 font-[700] transition hover:bg-yellow-500`"
        >{{ loading ? 'Logging in...' : 'Login' }}</button>
      </form>
    </div>
  </div>
</template>
<script setup>
  const loading = ref(false)

  const user = ref({
    email: '',
    password: ''
  })

  const login = () => {
    loading.value = true
    setTimeout(() => {
      // TODO: Login logic
      console.log("Login successful")
      loading.value = false
    }, 2000);
  }
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="max-w-[400px] w-full">
      <h1 class="mb-8 text-center text-neutral-100 text-4xl font-[600]">Login</h1>
      <form @submit.prevent="login" class="flex flex-col gap-2">
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
          :class="`button mt-4 ${loading && 'opacity-60'} bg-yellow-400 text-neutral-900 font-[700] transition cursor-pointer hover:bg-yellow-500`"
        >{{ loading ? 'Logging in...' : 'Login' }}</button>
      </form>
    </div>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: 'navbar'
  })

  const cart = useCart()
</script>

<template>
  <div class="container py-16 grid gap-8">
    <Header title="Cart" subtitle="All pokemons you have added to cart" />

    <main>
      <div class="flex flex-col gap-4">
        <div v-for="item in cart" class="flex justify-between items-center gap-4 p-2 pr-8 border-2 border-neutral-500 rounded text-neutral-100 transition hover:border-yellow-400">
          <NuxtImg :src=item.image class="w-28" />
          <div class="flex-1">
            <p class="text-xl font-[700] capitalize">{{ item.name }}</p>
            <p class="text-neutral-500">http://localhost:3000/{{ item.slug }}</p>
          </div>
          <div>
            <b class="text-4xl">${{ item.price }}</b>
          </div>
        </div>
      </div>

      <div class="flex justify-end mt-8">
        <button class="button bg-yellow-400 text-neutral-900 hover:bg-yellow-500">Checkout</button>
      </div>
    </main>
  </div>
</template>
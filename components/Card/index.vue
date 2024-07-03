<script setup>
  const props = defineProps(['pokemon'])
</script>

<template>
  <div class="w-full h-72 p-4 bg-neutral-800 rounded flex flex-col gap-1 items-end transition hover:bg-neutral-700">
    <!-- <div class="w-full flex-1 bg-white rounded" /> -->
    <NuxtImg :src="pokemon.image" class="w-full flex-1 rounded" />
    <div class="w-full flex justify-between items-end">
      <div>
        <p class="text-yellow-400 capitalize truncate">{{ pokemon.name }}</p>
        <p class="text-neutral-100 truncate">${{ pokemon.price }}</p>
      </div>
      <div class="mt-1 button py-1 px-2 bg-transparent border-2 border-yellow-400 text-sm text-yellow-400 cursor-pointer transition hover:bg-yellow-400 hover:text-neutral-900">
        <span>Add to cart</span>
      </div>
    </div>
  </div>
</template>
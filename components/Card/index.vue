<script setup>
  const props = defineProps(['pokemon'])
</script>

<template>
  <div class="w-full h-72 p-4 bg-neutral-800 rounded flex flex-col gap-1 items-end cursor-pointer transition hover:bg-neutral-700">
    <!-- <div class="w-full flex-1 bg-white rounded" /> -->
    <NuxtImg :src="pokemon.image" class="w-full flex-1 rounded" />
    <div class="flex flex-col items-end">
      <p class="text-yellow-400 capitalize truncate">{{ pokemon.name }}</p>
      <p class="text-neutral-100 truncate">${{ pokemon.price }}</p>
    </div>
  </div>
</template>
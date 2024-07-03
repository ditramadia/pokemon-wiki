<script setup>
definePageMeta({
    layout: 'navbar'
  })
</script>

<template>
  <div class="container py-8 grid gap-8">
    <Header title="Pokemons" subtitle="Find all your favourite pokemons!" />
  
    <main>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(pokemon, i) in 4" :key="i" class="w-full h-72 bg-neutral-800"> 

        </div>
      </div>
    </main>
  </div>
</template>
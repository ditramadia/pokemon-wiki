<script setup>
  definePageMeta({
    layout: 'navbar'
  })

  const { data: pokemons } = await useFetch('http://localhost:3000/api/pokemon', { lazy: true })
</script>

<template>
  <div class="container py-8 grid gap-12">
    <Header title="Pokemons" subtitle="Find all your favourite pokemons!" />
  
    <main>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(pokemon, index) in pokemons.data" :key="pokemon.id">
          <Card :pokemon="pokemon" />
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: 'navbar'
  })

  const curPage = ref(1)
  const pokemons = ref(null)

  const fetchData = async (page) => {
    const { data } = await useFetch(`http://localhost:3000/api/pokemon?p=${page}`)
    pokemons.value = data.value.data
  }

  watch(curPage, (newPage) => {
    fetchData(newPage)
  })

  await fetchData(curPage.value)

  const handleNextPage = () => {
    curPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handlePrevPage = () => {
    if (curPage.value > 1) {
      curPage.value--
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
</script>

<template>
  <div class="container py-8 grid gap-8">
    <Header title="Pokemons" subtitle="Find all your favourite pokemons!" />
  
    <main>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(pokemon, index) in pokemons" :key="pokemon.id">
          <Card :pokemon="pokemon" />
        </div>
      </div>

      <div class="w-full mt-4 flex gap-0 justify-end">
        <div @click="handlePrevPage" class="px-4 button border-2 border-neutral-100 text-neutral-100 hover:bg-neutral-800">Prev</div>
        <div class="px-4 button text-neutral-100 cursor-default">{{ curPage }}</div>
        <div @click="handleNextPage" class="px-4 button border-2 border-neutral-100 text-neutral-100 hover:bg-neutral-800">Next</div>
      </div>
    </main>
  </div>
</template>
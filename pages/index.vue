<script setup>
  definePageMeta({
    layout: 'navbar'
  })

  const curPage = ref(1)
  const pokemons = ref(null)
  const loading = ref(false)

  const fetchData = async (page) => {
    try {
      loading.value = true
      const { data } = await useFetch(`http://pokemon-wiki-drab.vercel.app/api/pokemon?p=${page}`, { lazy: true})
      pokemons.value = data.value.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
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
  <div class="container py-16 grid gap-8">
    <Header title="Pokemons" subtitle="Find all your favourite pokemons!" />
  
    <main>
      <div class="grid grid-cols-4 gap-4">
        <div v-if="loading" v-for="(skeleton, index) in 20" :key="index">
          <CardSkeleton />
        </div>
        <div v-else v-for="pokemon in pokemons" :key="pokemon.id">
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
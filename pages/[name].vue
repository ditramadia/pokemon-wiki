<script setup>
  definePageMeta({
    layout: 'navbar'
  })
  
  const { name } = useRoute().params
  const pokemon = ref(null)

  const fetchData = async () => {
    const { data } = await useFetch(`https://pokemon-wiki-drab.vercel.app/api/pokemon/${name}`)
    pokemon.value = data.value
  }
  
  await fetchData()

  const cart = useCart()

  const handleAddToCart = () => {
    let cartItem = {
      id: pokemon.value.id,
      name: pokemon.value.name,
      slug: pokemon.value.name,
      price: pokemon.value.base_experience,
      image: pokemon.value.sprites.other['official-artwork']['front_default'],
    }
    cart.value.push(cartItem)
  }
</script>

<template>
  <div class="container py-16 grid gap-8">
    <main class="flex justify-start gap-8">
      <NuxtImg :src="pokemon.sprites.other['official-artwork']['front_default']" :alt="pokemon.name" class="w-64 h-64" />

      <div class="flex-1 flex flex-col gap-4">
        <div>
          <h1 class="text-neutral-100 text-4xl font-[700] capitalize">{{ pokemon.name }}</h1>
        </div>
        <div>
          <span class="text-yellow-500 font-[700] uppercase text-xs">Type</span>
          <div class="mt-2 flex gap-2">
            <p v-for="type in pokemon.types" class="label border-2 border-neutral-100 text-neutral-100 capitalize">{{ type.type.name }}</p>
          </div>
        </div>
        <div>
          <span class="text-yellow-500 font-[700] uppercase text-xs">Species</span>
          <div class="mt-2 flex gap-2">
            <p class="label border-2 border-neutral-100 text-neutral-100 capitalize">{{ pokemon.species.name }}</p>
          </div>
        </div>
        <div>
          <span class="text-yellow-500 font-[700] uppercase text-xs">Abilities</span>
          <div class="mt-2 flex gap-2">
            <p v-for="ability in pokemon.abilities" class="label border-2 border-neutral-100 text-neutral-100 capitalize">{{ ability.ability.name }}</p>
          </div>
        </div>
      </div>

      <div class="w-44">
        <div class="flex items-center justify-between">
          <span class="text-neutral-400 font-[700] uppercase text-xs">Subtotal</span>
          <p class="text-4xl text-neutral-100 font-[700]">${{ pokemon.base_experience }}</p>
        </div>
        <div @click="handleAddToCart" class="button mt-4 bg-yellow-400 text-neutral-900 font-[700] flex items-center justify-center hover:bg-yellow-500">
          Add to Cart
        </div>
        <div class="button mt-2 border-2 border-yellow-400 text-yellow-400 font-[700] flex items-center justify-center hover:bg-yellow-400 hover:text-neutral-900">
          Favourite
        </div>
      </div>
    </main>
  </div>
</template>

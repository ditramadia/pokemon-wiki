import { defineEventHandler } from "h3";

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default defineEventHandler(async (event) => {
  const { p } = getQuery(event);

  const response = await $fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${20 * (p - 1)}&limit=20`
  );
  const pokemons = response.results;

  const detailedPokemons = await Promise.all(
    pokemons.map(async (pokemon) => {
      const name = pokemon.name;
      const url = pokemon.url;

      const pokeData = await $fetch(url);
      return {
        id: pokeData.id,
        name,
        slug: name,
        price: pokeData.base_experience,
        image: pokeData.sprites.other["official-artwork"]["front_default"],
      };
    })
  );

  await delay();

  return {
    data: detailedPokemons,
  };
});

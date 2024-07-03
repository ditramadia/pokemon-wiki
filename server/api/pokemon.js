import { defineEventHandler } from "h3";

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default defineEventHandler(async () => {
  const response = await $fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const pokemons = response.results;

  const detailedPokemons = await Promise.all(
    pokemons.map(async (pokemon) => {
      const name = pokemon.name;
      const url = pokemon.url;

      const pokeData = await $fetch(url);
      return {
        id: pokeData.id,
        name,
        price: pokeData.base_experience,
        image: pokeData.sprites.other["official-artwork"]["front_default"],
      };
    })
  );

  delay();

  return {
    data: detailedPokemons,
  };
});

export default defineEventHandler(async (event) => {
  const { name } = event.context.params;

  const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return response;
});

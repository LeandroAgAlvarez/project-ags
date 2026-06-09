export async function getPokemons() {

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  if (!response.ok) {
    throw new Error("Error fetching pokemons");
  }

  const data = await response.json();

  const detailedPokemons = await Promise.all(

    data.results.map(async (pokemon) => {

      const pokemonResponse = await fetch(pokemon.url);

      const pokemonData = await pokemonResponse.json();

      return {

        id: pokemonData.id,

        name: pokemonData.name,

        image:
          pokemonData.sprites.other["official-artwork"].front_default,

        types:
          pokemonData.types.map(
            (type) => type.type.name
          )

      };

    })

  );

  return detailedPokemons;
}
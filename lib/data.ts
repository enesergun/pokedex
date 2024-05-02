import axios from "axios";
export async function fetchPokemons(page: number) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        `pokemon?offset=${page}&limit=${process.env.NEXT_PUCLIC_DEFAULT_LIMIT}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function fetchSinglePokemon(name: string) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "pokemon/" + name
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

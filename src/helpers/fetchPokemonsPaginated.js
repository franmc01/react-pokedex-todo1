import {pokemonApi} from "../api";

export const fetchPokemonsPaginated = async (limit = 20, page = 1) => {
    const {data} = await pokemonApi.get(`/pokemon?limit=${limit}&offset=${limit * page}`);
    return data;
}

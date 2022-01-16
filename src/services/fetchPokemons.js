import {pokemonApi} from "../api";

export const fetchPokemons = async ({limit, page = 0}) => {
    const apiUrl = `/pokemon?limit=${limit}&offset=${limit * page}`;
    return await pokemonApi.get(apiUrl);
}

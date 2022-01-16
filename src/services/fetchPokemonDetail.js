import {pokemonApi} from "../api";

export const fetchPokemonDetail = async (name) => {
    const apiUrl = `/pokemon/${name}`;
    return await pokemonApi.get(apiUrl);
}

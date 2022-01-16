import {pokemonApi} from "../api";

export const fetchPokemonMoveDetail = async (moveName) => {
    const apiUrl = `/move/${moveName}`;
    return await pokemonApi.get(apiUrl);
}

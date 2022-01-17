import {pokemonApi} from "../api";

export const fetchPokemonMoveDetail = async (moveName) => {
    const {data} = await pokemonApi.get(`/move/${moveName}`);
    return data;
}

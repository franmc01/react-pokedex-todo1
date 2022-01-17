import {pokemonApi} from "../api";

export const fetchPokemonDetail = async (name) => {
    const {data} = await pokemonApi.get(`/pokemon/${name}`);
    return data;
}

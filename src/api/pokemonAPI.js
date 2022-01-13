import axios from "axios";

export const pokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

import {useEffect, useState} from "react";
import {fetchPokemonDetail} from "../helpers";


export const usePokemon = ({name}) => {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemonDetail(name).then(data => {
            setPokemon(data);
        }).finally(() => setLoading(false));
    }, [name])

    return {pokemon, loading}
}

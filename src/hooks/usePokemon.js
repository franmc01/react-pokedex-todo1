import {useEffect, useState} from "react";
import {fetchPokemonDetail} from "../services";


export const usePokemon = ({name}) => {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchPokemonDetail(name).then(res => {
            setPokemon(res.data);
        }).finally(() => setLoading(false));
    }, [name])

    return {pokemon, loading}
}

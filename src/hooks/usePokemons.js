import {useEffect, useState} from 'react';
import {pokemonAPI} from "../api";

export const usePokemons = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pokemonAPI
            .get('/pokemon')
            .then((res) => setData(res.data.results))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);


    return {data, error, loading};
};

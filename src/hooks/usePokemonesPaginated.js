import {useEffect, useState} from "react";
import {fetchPokemonsPaginated} from "../helpers";

const initialPage = 0;

export const usePokemonesPaginated = (limit = 20) => {
    const [pokemones, setPokemones] = useState([]);
    const [page, setPage] = useState(initialPage);

    useEffect(() => {
        fetchPokemonsPaginated(limit, page).then((data) => {
            setPokemones(prevPokemones => prevPokemones.concat(data.results));
        });
    }, [page, limit])

    return {pokemones, setPage}
}

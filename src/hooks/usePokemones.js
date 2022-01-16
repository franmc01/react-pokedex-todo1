import {useEffect, useState} from "react";
import {fetchPokemons} from "../services";

const initialPage = 0;

export const usePokemones = ({limit}) => {
    const [pokemones, setPokemones] = useState([]);
    const [page, setPage] = useState(initialPage);

    useEffect(() => {
        fetchPokemons({limit, page}).then((res) => {
            setPokemones(prevPokemones => prevPokemones.concat(res.data.results));
        });
    }, [page, limit])

    return {pokemones, setPage}
}

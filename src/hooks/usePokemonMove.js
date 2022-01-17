import {useEffect, useState} from "react";
import {fetchPokemonMoveDetail} from "../helpers";

export const usePokemonMove = (moveName) => {
    const [moveDetail, setMoveDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemonMoveDetail(moveName).then(data => {
            setMoveDetail(data);
        }).finally(() => setLoading(false));
    }, [moveName])

    return {moveDetail, loading}
}

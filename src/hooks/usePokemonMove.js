import {useEffect, useState} from "react";
import {fetchPokemonMoveDetail} from "../helpers";

export const usePokemonMove = (moveName) => {
    const [moveDetail, setMoveDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchPokemonMoveDetail(moveName).then(data => {
            setMoveDetail(data);
        }).finally(() => setLoading(false));
    }, [moveName])

    return {moveDetail, loading}
}

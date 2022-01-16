import {useEffect, useState} from "react";
import {fetchPokemonMoveDetail} from "../services";

export const usePokemonMove = (moveName) => {
    const [moveDetail, setMoveDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchPokemonMoveDetail(moveName).then(res => {
            setMoveDetail(res.data);
        }).finally(() => setLoading(false));
    }, [moveName])

    return {moveDetail, loading}
}

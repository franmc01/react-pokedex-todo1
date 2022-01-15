import {useEffect, useState} from 'react';
import axios from "axios";

export const useAxiosFetch = ({url, method = "get", options}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios[method](url, options)
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [method, url]);

    return {data, error, loading};
};

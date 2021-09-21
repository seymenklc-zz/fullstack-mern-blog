import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url, { withCredentials: true, credentials: 'include', })
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
};
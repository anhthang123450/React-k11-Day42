import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((res) => setError(res.error))
            .finally(() => setIsLoading(false));
    }, [url]);

    return [data, isLoading, error];
};

export default useFetch;

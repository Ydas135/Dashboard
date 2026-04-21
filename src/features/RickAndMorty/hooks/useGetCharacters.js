import { useEffect, useState } from "react";
import { getCharacters } from "../services/getCharacters";

export const useGetCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() =>{
        getCharacters()
            .then((data) => setCharacters(data.results))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [])

    return { characters, loading, error}

}
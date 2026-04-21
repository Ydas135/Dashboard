import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";

export const useGetPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemons()
            .then((data) => setPokemons(data.results))
            .finally(() => setLoading(false));
    }, []);

    return { pokemons, loading };
};
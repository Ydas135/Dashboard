import { useEffect, useState } from "react";
import { getPokemonById } from "../services/getPokemonById";

export const useGetPokemonById = (name) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemonById(name)
            .then(setPokemon)
            .finally(() => setLoading(false));
    }, [name]);

    return { pokemon, loading };
};
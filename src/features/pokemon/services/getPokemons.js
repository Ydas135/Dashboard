export const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

    if (!response.ok) {
        throw new Error("Error obteniendo pokemons");
    }

    return response.json();
};
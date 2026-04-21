export const getPokemonById = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
        throw new Error("Error obteniendo pokemon");
    }

    return response.json();
};
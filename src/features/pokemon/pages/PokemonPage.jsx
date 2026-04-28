import { useGetPokemons } from "../hooks/useGetPokemons";
import { useNavigate } from "react-router";
import { PokemonItem } from "../components/PokemonItem";

export const PokemonPage = () => {
  const { pokemons, loading } = useGetPokemons();
  const navigate = useNavigate();

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Pokemons</h1>

      <div className="grid grid-cols-2 gap-4">
        {pokemons.map(pokemon => {
          const id = pokemon.url.split("/")[6];
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div
              key={pokemon.name}
              onClick={() => navigate(`/pokemon/${pokemon.name}`)}
              className="border p-2 rounded cursor-pointer hover:bg-gray-100"
            >
              <img src={image} alt={pokemon.name} />
              <p className="capitalize">{pokemon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
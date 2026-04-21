import { useParams, useNavigate } from "react-router";
import { useGetPokemonById } from "../hooks/useGetPokemonById";

export const PokemonDetailPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { pokemon, loading } = useGetPokemonById(name);

  if (loading) return <h2>Cargando...</h2>;

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-slate-700/50 p-6 rounded-lg w-96">

        <button onClick={() => navigate(-1)}>⬅</button>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-full h-52 object-contain"
        />

        <h1 className="text-3xl font-bold capitalize mt-4">
          {pokemon.name}
        </h1>

        <p>Peso: {pokemon.weight}</p>
        <p>Altura: {pokemon.height}</p>

        <p className="mt-2 font-bold">Tipos:</p>
        {pokemon.types.map((t) => (
          <p key={t.type.name}>{t.type.name}</p>
        ))}
      </div>
    </div>
  );
};
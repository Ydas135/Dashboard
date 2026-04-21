import { useNavigate } from "react-router";

export const PokemonItem = ({ pokemon }) => {
  const navigate = useNavigate();

  const id = pokemon.url?.split("/")[6];
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
   
  return (
    <div key={pokemon.name}>
      {pokemon.name}
    </div>
  );
};
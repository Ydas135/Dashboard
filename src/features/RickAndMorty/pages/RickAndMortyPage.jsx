import { useGetCharacters } from "../hooks/useGetCharacters"
import { CharacterItem } from "../components/character-item/CharacterItem"

export const RickAndMortyPage = () => {
  const { characters, loading, error } = useGetCharacters()

  if(loading)
    return(
    <div className="">
      <h2>Loading Cargando</h2>
    </div>
    )

  return (
    <div className="flex">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character}/>
      ))}
    </div>  
  )
}

import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetCharacterById } from '../hooks/useGetCharacterById'


export function CharacterPage() {
  const { characterId } = useParams();
  const navigate = useNavigate()

  return (
    <div>CharactersPage</div>
  )
}

import React from 'react'
import { DisplayGender } from '../../utils/DisplayGender';
import { DisplayStatus } from '../../utils/DisplayStatus';

export const CharacterItem = ({character}) => {
  const { id, name, status, type, gender, origin, location, image } = character;

  return (
    <div 
        className='min-h-80 w-3xl bg-slate-700/50 rounded-lg px-6 py-2 flex flex-col gap-4'
        onClick={() => navigate()}
        >
        <img src={image} alt={name} className='w-full h-44 rounded-lg'/>
        <h2 className='font-bold opacity-50 text-2xl'>{name}</h2>

        <div className="">
            <div className="">
                <p>Gender:</p>
                <DisplayGender status={status} />
            </div>
        </div>
    </div>
  )
}

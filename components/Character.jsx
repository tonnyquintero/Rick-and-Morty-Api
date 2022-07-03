import React from 'react'
import Image from 'next/image'

export default function Character({character}) {
  return (
    <div className='text-center p-5'>
    <h3>{character.name}</h3>
    <Image className='img-fluid rounded-pill' src={character.image} width={150} height={150} alt={character.name} />
    <p>{character.origin.name}</p>
  </div>
  )
}

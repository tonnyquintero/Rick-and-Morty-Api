import React from 'react';
import CharacterList from '../components/CharacterList';

export default function index() {

  return (
    <div className='bg-dark text-white'>
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
      <CharacterList />
    </div>
  )
}

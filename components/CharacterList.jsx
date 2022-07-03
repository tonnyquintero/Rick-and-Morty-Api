import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Character from './Character';

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <p>
                pagina: {props.page}
            </p>
            <button className='btn btn-primary btn-sm'
                onClick={() => props.setPage(props.page + 1)}>
                pagina {props.page + 1}
            </button>
        </header>
    )
}

export default function CharacterList() {

    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        const dato = await response.data
        setLoading(false)
        setCharacter(dato.results)
      }
  
      fetchData()
    }, [page])

  return (
    <div className='container'>
        <NavPage page={page} setPage={setPage}/>

       {
        loading ? (<h1>Cargando...</h1>) : (
            <div className='row'>
            {
            character.map(character => {
              return (
                <div key={character.id} className='col-md-4'>
                    <Character  character={character} />
                </div>
              )
            })
          }
            </div>
        )
       }
       <NavPage page={page} setPage={setPage}/>
    </div>
  )
}

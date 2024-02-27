import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(()=>{
    fetch('https://dummyapi.online/api/pokemon')
    .then(res=>{
      return res.json()
    }).then(data=>{
      setPokemons(data)
      console.log(data)
    })
  },[])

  return (
    <>
    <div className='cards'>
      {
        pokemons.slice(0, 48).map((pokemon, index)=>(
          <div className='card' key={index}>
            <h2 className="title">{pokemon.name}</h2>
            <h2 className="title">{pokemon.abilities[0]}</h2>
            <img src={pokemon.image_url} alt="image" />
            <p className='rating'>{pokemon.hitpoints}</p>
            <p className='rating'>{pokemon.location}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App

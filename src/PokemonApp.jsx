import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunk"

export const PokemonApp = () => {
  const dispatch = useDispatch()
  const{pokemons,isLoading,page} = useSelector((state)=>state.pokemon)
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  return (
  <>
  <h2>POKEMON APP</h2>
  <hr></hr>
  {isLoading?(
  <p>Cargando...</p>
  ):(<>
  <ul>
      {pokemons.map((pokemon)=>(
        <li key={pokemon.name}> {pokemon.name}</li>
      ))}
    </ul>

    <button disabled={isLoading}
    onClick={()=> dispatch(getPokemons(page))}>
      Next pokemons
    </button>
  </>
    
  )}
  </>
  )
}

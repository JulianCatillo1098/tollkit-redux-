import { pokemonApi } from "../../../api/pokemonAPI"
import { empieceACargarPokemons, setPokemons } from "./pokemonSlice"

export const getPokemons=(page = 0) => {
    return async(dispath,getState)=>{
        dispath(empieceACargarPokemons())
        // TODO: realizado 
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page*10}`)
        console.log(data)
        dispath(setPokemons({pokemons: data.results,page: page+1}))
    }
}
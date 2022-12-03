import Options from "./Options"
import { useEffect,useState } from "react"

const YourPokemon = ({pokemons,atributes,id,onPokemonSelected,handleTeamSubmit}) =>{

    const handleChange = function(event) {
        const chosenPokemon = pokemons[event.target.value];
        onPokemonSelected(chosenPokemon);

    }

    const pokemonOptions = pokemons.map((pokemon, index) => {
        return <option value={index} key={index}>{pokemon.name}</option>
      })

    

    return(
    <>
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose 1st Pokemon</option>
            {pokemonOptions}
        </select>
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose 2nd Pokemon</option>
            {pokemonOptions}
        </select>
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose 3rd Pokemon</option>
            {pokemonOptions}
        </select>
      <button onSubmit={handleTeamSubmit}>
        Click to submit team
      </button>
        <Options/>
    </>
    )
}

export default YourPokemon
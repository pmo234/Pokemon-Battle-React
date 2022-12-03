import Choices from "./Choices"
import { useState , useEffect} from "react"

const Options = ({pokemon}) =>{
    const [actualPokemon,setActualPokemon] = useState("")

    useEffect(()=>
        setActualPokemon(pokemon)
    ,[])

    console.log(actualPokemon)

    return(
        <div className="pokemon-options">
            
        {/* You have selected {actualPokemon.name} */}
        

            <Choices/>
        </div>
    )
}

export default Options
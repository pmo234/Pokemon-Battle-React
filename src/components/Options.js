import Choices from "./Choices"
import { useState , useEffect} from "react"
import './Options.css'

const Options = ({atributes5,attackPokemon,handleAttack}) =>{
    

    
    


    

    return(
      <h5>
        What move would you like to choose?

        <br></br>
        <button onClick = {handleAttack}>{atributes5.moves[0].move.name}</button>
        <br></br>
        <button onClick = {handleAttack}>{atributes5.moves[1].move.name}</button>
        <br></br>
        <button onClick = {handleAttack}>{atributes5.moves[2].move.name}</button>
        <br></br>
        <button onClick = {handleAttack}>{atributes5.moves[3].move.name}</button>
      </h5>
    )
}

export default Options
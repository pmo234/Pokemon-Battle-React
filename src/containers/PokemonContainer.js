import EnemyPokemon from "../components/EnemyPokemon"
import YourPokemon from "../components/YourPokemon"
import Options from "../components/Options";
import { useState,useEffect } from "react";

const PokemonContainer = () =>{
        const [pokemons, setPokemon] = useState([]);
        const [atributes, setAtributes] = useState([])
        const [atributes2, setAtributes2] = useState([])
        const [atributes3, setAtributes3] = useState([])
        const [atributes4, setAtributes4] = useState([])
        const [id, setId] = useState(Math.floor(Math.random() * 152))
        const [id2, setId2] = useState(Math.floor(Math.random() * 152))
        const [id3, setId3] = useState(Math.floor(Math.random() * 152))
        const [id4, setId4] = useState(Math.floor(Math.random() * 152))
        const [yourteam, setYourTeam] = useState("")
        
        const [selectedpokemon,setSelectedPokemon] = useState(null)
        
        
        useEffect(() => {
          
          getPokemon()
          
        }, [])
        

        const onPokemonSelected = function(pokemon){
            setSelectedPokemon(pokemon);
            console.log(selectedpokemon)
            addPokemon(selectedpokemon)
        }

        const addPokemon = (newPokemon) => {

            const updatedPokemon = [newPokemon,...yourteam];
            setYourTeam(updatedPokemon);
            console.log(yourteam)
    
        }

        const handleTeamSubmit = function(event) {
            event.preventDefault()
            addPokemon(selectedpokemon)

    }
       
        
    
        const getPokemon = function(){
            Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'),
            fetch('https://pokeapi.co/api/v2/pokemon/'+id+'/'),
            fetch('https://pokeapi.co/api/v2/pokemon/'+id2+'/'),
            fetch('https://pokeapi.co/api/v2/pokemon/'+id3+'/'),
            fetch('https://pokeapi.co/api/v2/pokemon/'+id4+'/')])
            .then(([resPokemon,resAtributes,resAtributes1,resAtributes2,resAtributes3]) => Promise.all([resPokemon.json(),resAtributes.json(),
            resAtributes1.json(),resAtributes2.json(),resAtributes3.json()]))
            .then(([pokemons,atributes,atributes2,atributes3,atributes4])=>{
                setPokemon(pokemons.results);
                setAtributes(atributes);
                setAtributes2(atributes2);
                setAtributes3(atributes3);
                setAtributes4(atributes4);
            })
        
        }
            

        

    return(
        <>
            <h1>Pokemon Battler!</h1>
            <EnemyPokemon pokemons={pokemons}/>
            {/* {selectedpokemon ? <h2> This is {pokemons[id4-1].name}</h2>:null}
            {selectedpokemon ? <h2> <img src={atributes4.sprites.front_default} alt="pokemon"/></h2>:null} */}
            <YourPokemon pokemons={pokemons} atributes={atributes} id = {id} onPokemonSelected = {onPokemonSelected} handleTeamSubmit = {handleTeamSubmit}/>
            {/* {selectedpokemon ? <h2> This is {pokemons[id-1].name}</h2>:null}
            {selectedpokemon ? <h2> <img src={atributes.sprites.back_default} alt="pokemon"/></h2>:null} */}
            {selectedpokemon ? <h2> You have selected {selectedpokemon.name}</h2>:null}
            {/* {yourteam ? <h2> Your team is {yourteam[0].name}</h2>:null} */}
        </>
    )
}

export default PokemonContainer
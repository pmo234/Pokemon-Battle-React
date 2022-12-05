import EnemyPokemon from "../components/EnemyPokemon"
import YourPokemon from "../components/YourPokemon"
import Options from "../components/Options";
import { useState,useEffect } from "react";
import './PokemonContainer.css'

const PokemonContainer = () =>{
        const [pokemons, setPokemon] = useState([]);
        const [atributes, setAtributes] = useState([])
        const [atributes2, setAtributes2] = useState([])
        const [atributes3, setAtributes3] = useState([])
        const [atributes4, setAtributes4] = useState([])
        const [atributes5, setAtributes5] = useState([])
        const [atributes6, setAtributes6] = useState([])
        const [atributes7, setAtributes7] = useState([])
        const [atributes8, setAtributes8] = useState([])
        const [id, setId] = useState(Math.floor(Math.random() * 152))
        const [id2, setId2] = useState(Math.floor(Math.random() * 152))
        const [id3, setId3] = useState(Math.floor(Math.random() * 152))
        const [id4, setId4] = useState(Math.floor(Math.random() * 152))
        const [yourteam, setYourTeam] = useState([])
        const [pokemonHealth1, setPokemonHealth1] = useState(0)
        const [pokemonHealth2, setPokemonHealth2] = useState(0)
        const [pokemonHealth3, setPokemonHealth3] = useState(0)
        const [pokemonHealthEnemy, setPokemonHealthEnemy] = useState(1)
        const [selectedpokemon,setSelectedPokemon] = useState(null)
        const [currentPokemon,setCurrentPokemon] = useState(null)
        
        useEffect(()=>{
        if (yourteam.length<3)
            return
        setPokemonHealth1(atributes5.stats[0].base_stat)
        setPokemonHealth2(atributes6.stats[0].base_stat)
        setPokemonHealth3(atributes7.stats[0].base_stat)
        setPokemonHealthEnemy(atributes4.stats[0].base_stat)
        },[selectedpokemon])
        
        useEffect(() => {
          
          getPokemon()
          
        }, [])
        
        useEffect(() => {
          if (selectedpokemon===null)
            return
          addPokemon(selectedpokemon)
        }, [selectedpokemon])

        const onPokemonSelected = function(pokemon){
            setSelectedPokemon(pokemon);
        }

        const listOfPokemon = pokemons.map((pokemon,index)=>{
            return  pokemon.name
        
        })

        const addPokemon = (newPokemon) => {

            const updatedPokemon = [...yourteam,newPokemon];
            setYourTeam(updatedPokemon);
            if (updatedPokemon.length===1)
                getPokemonAtributes(listOfPokemon.indexOf(updatedPokemon[updatedPokemon.length-1].name))
                setCurrentPokemon(updatedPokemon[0])
            if (updatedPokemon.length===2)
                getPokemonAtributes2(listOfPokemon.indexOf(updatedPokemon[updatedPokemon.length-1].name))
            if (updatedPokemon.length===3)
                getPokemonAtributes3(listOfPokemon.indexOf(updatedPokemon[updatedPokemon.length-1].name))
            return  
            
        }
        
        const attackPokemon = function(chosenAttack){

            const newEnemyPokemonHealth1 = pokemonHealthEnemy - atributes5.stats[1].base_stat
            const newEnemyPokemonHealth2 = pokemonHealthEnemy - atributes6.stats[1].base_stat
            const newEnemyPokemonHealth3 = pokemonHealthEnemy - atributes7.stats[1].base_stat
            if (pokemonHealth1 >0)
                setPokemonHealthEnemy(newEnemyPokemonHealth1)
                
            if (pokemonHealth2 >0 && pokemonHealth1<0)
                setPokemonHealthEnemy(newEnemyPokemonHealth2)
                
            if (pokemonHealth3 >0 && pokemonHealth1<=0 && pokemonHealth2<=0)
                setPokemonHealthEnemy(newEnemyPokemonHealth3)
            
            enemyAttack()
            // return <h1>{yourteam[0].name} used {chosenAttack}</h1>

        }

        const enemyAttack = function(){
            
            const newFriendlyPokemonHealth1 = pokemonHealth1 - atributes4.stats[1].base_stat
            const newFriendlyPokemonHealth2 = pokemonHealth2 - atributes4.stats[1].base_stat
            const newFriendlyPokemonHealth3 = pokemonHealth3 - atributes4.stats[1].base_stat
            if (pokemonHealth1 >0)
                setPokemonHealth1(newFriendlyPokemonHealth1)
                
            if (pokemonHealth2 >0 && pokemonHealth1<0)
                setPokemonHealth2(newFriendlyPokemonHealth2)
                
            if (pokemonHealth3 >0 && pokemonHealth1<=0 && pokemonHealth2<=0)
                setPokemonHealth3(newFriendlyPokemonHealth3)
        
            

        }

        const handleAttack = function(event) {
            event.preventDefault()
            const chosenAttack = atributes5[event.target.value];
            attackPokemon(chosenAttack)
    
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
                
                const getPokemonAtributes = function(pokemonNumber){
                    
                    fetch('https://pokeapi.co/api/v2/pokemon/'+(pokemonNumber+1)+'/')
                    .then((resPokemonAtributes) => resPokemonAtributes.json())
                    .then((atributes5) => {setAtributes5(atributes5)})
                }
                const getPokemonAtributes2 = function(pokemonNumber){
                    fetch('https://pokeapi.co/api/v2/pokemon/'+(pokemonNumber+1)+'/')
                    .then((resPokemonAtributes) => resPokemonAtributes.json())
                    .then((atributes6) => {setAtributes6(atributes6)})
                    
                }
                const getPokemonAtributes3 = function(pokemonNumber){
                fetch('https://pokeapi.co/api/v2/pokemon/'+(pokemonNumber+1)+'/')
                .then((resPokemonAtributes) => resPokemonAtributes.json())
                .then((atributes7) => {setAtributes7(atributes7)})
                 }
        
        
        console.log(atributes5)
        console.log(atributes6)
        console.log(atributes7)
        
        if (pokemonHealthEnemy<=0)
                 return(
                 <>
                 <h2>You have won!</h2>
                 <img src={atributes5.sprites.front_default} alt="pokemon"/>
                 <img src={atributes6.sprites.front_default} alt="pokemon"/>
                 <img src={atributes7.sprites.front_default} alt="pokemon"/>
                 </>
                 )
        return(
            <div>
                    <h1>Pokemon Battler!</h1>
                    {yourteam.length<4 ? <YourPokemon pokemons={pokemons} atributes={atributes} id = {id} onPokemonSelected = {onPokemonSelected}/> : null}
                    {yourteam.length>3 ? <h2>
                        <br></br>
                        <EnemyPokemon pokemons={pokemons}/>
                        <h2> {pokemons[id4-1].name} attacks!</h2>
                        <h2> <img src={atributes4.sprites.front_default} alt="pokemon"/></h2>
                        <h5> Health {pokemonHealthEnemy}</h5>
                            {pokemonHealth1>0 ?
                            <h2> 
                            <img src={atributes5.sprites.back_default} alt="pokemon"/>
                            <h5> Health {pokemonHealth1}</h5>
                            I choose you {yourteam[0].name}!
                            <Options atributes5={atributes5} attackPokemon = {attackPokemon} handleAttack = {handleAttack}/>
                            </h2> 
                            :
                            <h2> 
                            
                            <img src={atributes6.sprites.back_default} alt="pokemon"/>
                            <h5> Health {pokemonHealth2}</h5>
                            <br></br>
                            I choose you {yourteam[1].name}!
                            <Options atributes5={atributes6} attackPokemon = {attackPokemon} handleAttack = {handleAttack}/>
                            </h2> }
                </h2>:null}
                
                
            </div>
        )
}

export default PokemonContainer
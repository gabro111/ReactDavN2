import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import { Button, CardGroup, Container, Row } from 'reactstrap'
import PokemonThumbnail from './PokemonThumbnail';
function Home() {

    const baseURL = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
    const [allPokemon,setAllPokemon]=useState([]);
    const [loadMore,setLoadMore]=useState("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
    const currentList = [];

    async function createPokemonObject(results){

      results.forEach(async pokemon => {
          const response = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data =await response.data;

          setAllPokemon(myArray =>[...myArray,data]);
          
      });
       
   
    }

    async function  getAllPokemon(){
        const response = await axios(loadMore);
        const data = await response.data;

        setLoadMore(data.next);
        createPokemonObject(data.results);

    }




    useEffect(()=>{
        getAllPokemon();
        
    },[]);
    

    if(!allPokemon) return null;

    return (
        <Container >
            <h1>{allPokemon.count}</h1>
            <Row xs={1} md={3} >
                {
                    allPokemon.map((pokemon,index) =>
                        <PokemonThumbnail
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        type={pokemon.types[0].type.name}
                        key={index}
                        />
                        )
                }
            </Row>

            <Button onClick={()=>getAllPokemon()}>LoadMore</Button>
            
        </Container>
    )
}

export default Home

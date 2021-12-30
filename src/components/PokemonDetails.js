import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import {CardText,CardTitle,CardHeader, Button, Card, CardBody, CardGroup, CardImg, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';






function PokemonDetails() {
    let {name} = useParams();
    let navigate = useNavigate();


    const [pokemon, setPokemon] = useState(null);

    async function getPokemon(name){

        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.data;
        console.log(data);
        setPokemon(data);
    }
    
    useEffect(() => {
        getPokemon(name);
    }, []);


    if(!pokemon) return null;
    return (
        <Card style={{ width:"40%",margin:"auto" ,height:"40%"}} >
        <CardHeader>
            {pokemon.id}
        </CardHeader>

        <CardImg
        width="70%"
        height="75%"
            src={pokemon.sprites.other.dream_world.front_default}
  />
        <CardTitle tag="h3">
            {pokemon.name}
        </CardTitle>
        <CardText tag="h5"  className="mb-2 text-muted">
            type {pokemon.types[0].type.name}
        </CardText>
        <Button
        onClick={()=>navigate("/")}
        >
            Back
        </Button>

        <Home/>
    </Card>
    
   
    )
}

export default PokemonDetails

import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate,useHistory  } from 'react-router-dom';

import { Card, CardHeader, CardImg, CardTitle, Container,CardText } from 'reactstrap'

const PokemonThumbnail = ({ id, name, image, type }) => {
    let navigate = useNavigate();

  
    function ToPokemon() {
        navigate(`../pokemon/${name}`,{replace:true});
        window.location.reload(true);
    }

    const style = `pokemon-container ${type}`
    return (

            <Card className={style} style={{ cursor: "pointer" }} onClick={ToPokemon}>
                <CardHeader>
                    {id}
                </CardHeader>

                <CardImg
                
                    src={image}
                    width="70%"
                    height="75%" />
                <CardTitle tag="h3">
                    {name}
                </CardTitle>
                <CardText>
                    type {type}
                </CardText>
            </Card>

    )
}

export default PokemonThumbnail

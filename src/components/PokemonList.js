import React, {useEffect, useState} from 'react';
import Pokemon from "./Pokemon";
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => {
                setPokemonList(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h3>Pokemon list</h3>
            <ul style={{
                maxWidth: 1200,
                wordBreak: "break-all"
            }}>
                {pokemonList.length > 0 && pokemonList.map((pokemon, index) => (
                    <li style={{display: "inline-block", verticalAlign: "top", position: "relative"}}
                        key={index}>
                        <a style={{
                            display: "inline-block", width: 100, textAlign: "center",
                        }}>
                            <Pokemon name={pokemon.name} isDetail={true}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
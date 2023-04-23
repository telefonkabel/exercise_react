import React, {useState} from 'react';
import Pokemon from "./Pokemon";
import Team from "./Team";
import {v4 as uuidv4} from 'uuid';

const Selection = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [team, setTeam] = useState([]);

    const handleInputChange = (event) => {
        setPokemonName(event.target.value.toLowerCase());
    }

    const addToTeam = (event) => {
        event.preventDefault();
        if (team.length >= 6) {
            const newTeam = team.slice(1);
            setTeam([...newTeam, {id: uuidv4(), name: pokemonName}]);
        } else {
            setTeam([...team, {id: uuidv4(), name: pokemonName}]);
        }
    }

    return (
        <div>
            <label htmlFor="selection">Choose Pokemon: </label>
            <input onChange={handleInputChange} name="selection"/>
            <button onClick={addToTeam}>Add to Team</button>
            {
                pokemonName && (
                    <div>
                        <Pokemon key={pokemonName} name={pokemonName}/>
                        <Team team={team}/>
                    </div>
                )
            }
        </div>
    );
}

export default Selection;
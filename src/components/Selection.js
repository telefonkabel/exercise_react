import React, {useState} from 'react';
import Pokemon from "./Pokemon";

const Selection = () => {
    const [pokemonName, setPokemonName] = useState("");

    const handleInputChange = (event) => {
        setPokemonName(event.target.value.toLowerCase());
    }

    return (
      <div>
          <input onChange={handleInputChange} />
          {
              pokemonName && (
                  <div>
                      <Pokemon key={pokemonName} name={pokemonName} />
                  </div>
              )
          }
      </div>
    );
}

export default Selection;
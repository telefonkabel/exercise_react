import React, {useEffect, useState} from 'react';

const Pokemon = ({name, isDetail}) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemonData(data);
        };
        fetchData();
    }, [name]);

    let index = Number.MAX_SAFE_INTEGER;
    if (pokemonData) {
        for (let i = 0; i < 5; i++) {
            index = Math.min(index, pokemonData.game_indices[i].game_index)
        }
    }

    if (!pokemonData || index > 151) {
        return;
    }

    return (
        <div>
            {
                pokemonData && (
                    <div>
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                        {isDetail ?
                            <div>
                                <h4>{pokemonData.name}</h4>
                                <ul style={{position: "relative", alignItems: "center", listStyleType: "none", padding: 0}}>
                                    {pokemonData.types.map((item, index) => (
                                        <li key={index}>{item.type.name}</li>
                                    ))}
                                </ul>
                            </div>
                            : null}
                    </div>
                )
            }
        </div>
    );
};

export default Pokemon;
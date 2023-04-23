import React, {useState, useEffect} from 'react';

const Pokemon = ({name}) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemonData(data);
        };
        fetchData();
    }, [name]);

    if (!pokemonData) {
        return <div>Enter a valid Pokemon</div>;
    }

    return (
        <div>
            {
                pokemonData && (
                    <div>
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                        <h4>{pokemonData.name}</h4>
                        <ul style={{position:"relative", alignItems:"center", listStyleType:"none", padding:0}}>
                            {pokemonData.types.map((item, index) => (
                                <li key={index}>{item.type.name}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default Pokemon;
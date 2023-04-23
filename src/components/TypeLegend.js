import React, {useEffect, useState} from 'react';
import axios from 'axios';

const TypeLegend = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => {
                setTypes(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
        }, []);

    return (
        <div>
            <h4>Type legend</h4>
            <ul style={{ maxWidth: 1200,
                wordBreak: "break-all"}}>
                {types.map((type) => (
                    <li style={{ display: "inline-block", verticalAlign: "top", position: "relative"}}
                        key={type.name}>
                        <a style={{ display: "inline-block", width: 80, textAlign: "center",
                        }}>
                            {type.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TypeLegend;
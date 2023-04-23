// import React, {useEffect, useState} from 'react';
// import Pokemon from "./Pokemon";
// import axios from 'axios';
//
// const PokemonList = () => {
//     // const [types, setTypes] = useState([]);
//     //
//     // useEffect(() => {
//     //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
//     //         .then(response => {
//     //             setTypes(response.data.results);
//     //         })
//     //         .catch(error => {
//     //             console.log(error);
//     //         });
//     //     }, []);
//
//     const [pokemonList, setPokemonList] = useState([]);
//
//     useEffect(() => {
//         axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
//             .then(response => {
//                 setPokemonList(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//         }, []);
//
//     return (
//         // <div>
//         //     <h4>Pokemon list</h4>
//         //     <ul style={{ maxWidth: 1200,
//         //         wordBreak: "break-all"}}>
//         //         {pokemonData.map((poke) => (
//         //             <li style={{ display: "inline-block", verticalAlign: "top", position: "relative"}}
//         //                 key={poke.name}>
//         //                 <a style={{ display: "inline-block", width: 80, textAlign: "center",
//         //                 }}>
//         //                     {poke.name}
//         //                 </a>
//         //             </li>
//         //         ))}
//         //     </ul>
//         // </div>
//         <div>
//             <h4>Pokemon list</h4>
//             <ul style={{ maxWidth: 1200,
//                 wordBreak: "break-all"}}>
//                 {pokemonList.map((pokemon, index) => (
//                     <li style={{ display: "inline-block", verticalAlign: "top", position: "relative"}}
//                         key={index}>
//                         <a style={{ display: "inline-block", width: 80, textAlign: "center",
//                         }}>
//                             <Pokemon name={pokemon.name} />
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default PokemonList;
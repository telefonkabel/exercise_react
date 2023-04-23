import React from 'react';
import Selection from "./components/Selection";
import TypeLegend from "./components/TypeLegend";
import PokemonList from "./components/PokemonList";

const App = () => {
  return (
    <div style={{
        backgroundColor: '#263238',
        width: 1200,
        color: "white",
        wordBreak: "break-all"}}>
        <TypeLegend />
        <Selection />
        <PokemonList />
    </div>
  );
}

export default App;

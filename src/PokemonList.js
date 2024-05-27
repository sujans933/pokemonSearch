import React from "react";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;

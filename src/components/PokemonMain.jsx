import React, { useEffect, useState } from "react";
import PokemonAddForm from "./PokemonAddForm";
import PokemonSearchForm from "./PokemonSearchForm";
import { getPokemon } from "../services/services";
import PokemonCard from "./PokemonCard";

const PokemonMain = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemon();
        setPokemon(data);
        console.log(pokemon);
      } catch (error) {
        console.error("Failed to load pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <main>
      <h1 className="text-4xl font-semibold text-center mb-6">
        Pokemon Searcher
      </h1>
      <p className="text-xl font-semibold text-center mb-4">Add a Pokemon!</p>
      <PokemonAddForm />
      <PokemonSearchForm />

      <div className="flex flex-wrap flex-1 gap-4 items-center justify-center p-6">
        {pokemon.map(({ name, id, img }) => (
          <PokemonCard key={id} name={name} imgUrl={img} />
        ))}
      </div>
    </main>
  );
};

export default PokemonMain;

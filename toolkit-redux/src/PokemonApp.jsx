import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  setPokemons,
  startLoadingPokemons,
} from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading: {JSON.stringify(isLoading)}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button
      onClick={()=>{dispatch(getPokemons(page))}}
      >Next</button>
    </>
  );
};

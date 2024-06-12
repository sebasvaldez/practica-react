import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //TODO: realizar peticion a la API
    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await response.json();
    // console.log(data);
    
    const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
    console.log(data.results);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};

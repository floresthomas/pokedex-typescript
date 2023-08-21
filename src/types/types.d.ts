import { PokeTypes } from "../utils/BackgroundByType";

export interface AllPokemonsResult {
  name: string;
  url: string;
}

export type PokeType = {
  name: PokeTypes | "All";
  url?: string;
};

export type PokemonsByTypeResult = {
  pokemon: {
    name: string;
    url: string;
  };
};
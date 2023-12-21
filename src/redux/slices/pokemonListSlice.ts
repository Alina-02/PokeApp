import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface PokemonState {
  id: number,
  image: string,
  name: string,
  height: number,
  weight: number,
  types: []
}

// create the type definition of our initial state

interface PokemonListState {
  pokemons: PokemonState[],
  favouritePokemons: PokemonState[]
  
}

// Define the initial state using that type
// pokemonList will be used to store all the pokemon
// we can have as many properties defined in the initialState as we need
const initialState: PokemonListState = {
  pokemons: [],
  favouritePokemons: []
}

// the logic of the reducer and the different actions associated with it
export const pokemonListSlice = createSlice({
  // name of the slice
  name: 'pokemonList',
  // `createSlice` will infer the state type from the `initialState` argument
  // initial state of the reducer function
  initialState,
  // object that accepts different actions we want to define for our reducer
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.pokemons = [...state.pokemons, action.payload]
    },
    addFavouritePokemon: (state, action: PayloadAction<PokemonState>) => {
      state.favouritePokemons = [...state.favouritePokemons, action.payload]
    },
    removeFavouritePokemon: (state, action: PayloadAction<number>) => {
      state.favouritePokemons = state.favouritePokemons.filter((pokemon) => pokemon.id !== action.payload)
      
      //state.favouritePokemons.splice(state.favouritePokemons.findIndex((pokemon) => pokemon.id === action.payload), 1)
    }
  },
})

//export the actions associated with our reducer and the slice
export const { addPokemon, addFavouritePokemon, removeFavouritePokemon } = pokemonListSlice.actions

export default pokemonListSlice.reducer

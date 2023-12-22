import { Box,  Grid } from "@mui/material";
import Pokemon from "./Pokemon";
import { useEffect } from "react";
import axios from "axios";
import { PokemonType } from  "../types/pokemon.type";
import { AppDispatch } from "../redux/store";
import { addPokemon } from "../redux/slices/pokemonListSlice";
import { useAppDispatch } from "../redux/hooks";
import { useAppSelector } from "../redux/hooks";


const PokemonList = () => {
    const dispatch: AppDispatch = useAppDispatch()
    const pokemonList = useAppSelector((state) => state.pokemonList.pokemons)

    const getPokemonList = async () => {
        
        const d = await axios('https://pokeapi.co/api/v2/pokemon?limit=99')
        const pokemon_array = d.data.results


        for(let i = 0; i < 99; i++){
            const d_pokemon = await axios(pokemon_array[i].url)

            const pokemon = {
                id: d_pokemon.data.id,
                image: d_pokemon.data.sprites.front_default,
                name: d_pokemon.data.name,
                height: d_pokemon.data.height,
                weight: d_pokemon.data.weight,
                types: d_pokemon.data.types
            }
            
            if(pokemonList.length < 99){
                dispatch(addPokemon(pokemon))
            }
        }

    }

    useEffect(() => {    

        getPokemonList();
        
     }, []);


    return (
            <Box sx={{width:'100%', fontFamily: 'Pixelify Sans'}}>
                <Grid container
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={{xs: 2, md: 3}}>
                    {pokemonList.map((pokemon: PokemonType) => {
                        return <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
                                    <Pokemon 
                                            id_p={pokemon.id} 
                                            image_p={pokemon.image} 
                                            name_p={pokemon.name} 
                                            weight_p={pokemon.weight} 
                                            height_p={pokemon.height} 
                                            types_p={pokemon.types}/>
                                </Grid>
                    })}
                </Grid>            
            </Box>
    )
}

export default PokemonList;
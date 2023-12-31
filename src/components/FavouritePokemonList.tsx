import { Box, Grid } from "@mui/material"
import Pokemon from "./Pokemon";
import { PokemonType } from "../types/pokemon.type";
import { useAppSelector } from "../redux/hooks";

const FavouritePokemonList = () => {
    const favouritePokemonList = useAppSelector((state) => state.pokemonList.favouritePokemons)


    return (
        <Box sx={{width:'100%', fontFamily: 'Pixelify Sans'}}>
                <Grid container
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={{xs: 2, md: 3}}>
                    {favouritePokemonList.map((pokemon: PokemonType) => {
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

export default FavouritePokemonList;
import { useEffect, useState } from "react"

import { Box, Card, IconButton, Stack, Typography } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

import { AppDispatch, RootState } from "../redux/store"
import { useAppDispatch } from "../redux/hooks"
import { addFavouritePokemon } from "../redux/slices/pokemonListSlice";
import { removeFavouritePokemon } from "../redux/slices/pokemonListSlice"
import { PokemonType} from "../types/pokemon.type"
import { useSelector } from "react-redux"



interface PokemonPropTypes {
    id_p: number,
    image_p: string,
    name_p: string,
    weight_p: number,
    height_p: number,
    types_p: []
}

const enum TabsPokemon {
    FIGHTING = '#C22E28',
    FIRE = '#EE8130',
    ROCK = '#B6A136',
    ELECTRIC = '#F7D02C',
    GROUND = '#E2BF65',
    NORMAL = '#A8A77A',
    BUG = '#A6B91A',
    GRASS = '#7AC74C',
    ICE = '#96D9D6',
    WATER = '#6390F0',
    FLYING = '#A98FF3',
    GHOST = '#735797',
    POISON = '#A33EA1',
    STEEL = '#B7B7CE',
    FAIRY = '#D685AD',
    PSYCHIC = '#F95587', 
  }


const Pokemon: React.FC<PokemonPropTypes>  = ({id_p, image_p, name_p, weight_p, height_p, types_p}) => {

    const dispatch: AppDispatch = useAppDispatch()
    const [favourite, setFavourite] = useState(false)
    const [types, setTypes] = useState('')
    const favouritePokemonList = useSelector((state:RootState) => state.pokemonList.favouritePokemons) 

    //set the types list
    const getTypesList = () => { 
        let t = ""
        types_p.map((value: type) => {
            t += value.type.name + ', '
        })
        setTypes(t)
    }

    //set favourite buttons
    const setFavouriteButton = () => {
        const fav = favouritePokemonList.filter((pokemon: PokemonType) => pokemon.id == id_p)
        fav.length > 0 ? setFavourite(true) : setFavourite(false)
    }

    useEffect(() => { 

        getTypesList();
        setFavouriteButton();

     }, []);

    const handleFavouriteButton = () => {
        const pokemon = {
            id: id_p,
            image: image_p,
            name: name_p,
            weight: weight_p,
            height: height_p,
            types: types_p
        }

        if(!favourite){
            console.log("entra en gris")
            setFavourite(true)
            dispatch(addFavouritePokemon(pokemon))
        }else{
            console.log("entra en dorado")
            setFavourite(false)
            dispatch(removeFavouritePokemon(id_p))
        }
    }


    //https://github.com/duiker101/pokemon-type-svg-iconsput sgv r

    return (
        <Stack sx={{backgroundColor:'#ef233c', 
                    color:'black', 
                    padding:1.5, 
                    borderRadius:3, 
                    border:3,
                    boxShadow: 3
                }}>
            <Stack  sx={{width:'100%', 
                        justifyContent:"space-between", 
                        flexDirection:'row-reverse'}}>
                <IconButton size="large" onClick={() => handleFavouriteButton()}>
                    <CatchingPokemonIcon sx={{fontSize:40, 
                                    ...(favourite && {
                                        color: '#ffa600',
                                      }),
                                      ...(!favourite && {
                                        color: '#5e5b52',
                                      }),
                                    }}/>
                </IconButton>
                <Stack direction='row' sx={{width: 'inherit', marginRight: 1}}>
                    {types_p.slice(0).reverse().map((value) => {
                        return <Card key={id_p + value.type.name} 
                                    sx={{backgroundColor: 'white', 
                                            minWidth: '9%', 
                                            borderRadius: 40, 
                                            maxHeight: '40px',
                                            marginTop: 1,
                                            marginLeft: 1,
                                            boxShadow: 3,
                                            border: 1,
                                            ...(value.type.name == 'grass' && {
                                                backgroundColor: TabsPokemon.GRASS,
                                            }),
                                            ...(value.type.name == 'fire' && {
                                                backgroundColor: TabsPokemon.FIRE,
                                            }),
                                            ...(value.type.name == 'rock' && {
                                                backgroundColor: TabsPokemon.ROCK,
                                            }),
                                            ...(value.type.name == 'water' && {
                                                backgroundColor: TabsPokemon.WATER,
                                            }),
                                            ...(value.type.name == 'bug' && {
                                                backgroundColor: TabsPokemon.BUG,
                                            }),
                                            ...(value.type.name == 'normal' && {
                                                backgroundColor: TabsPokemon.NORMAL,
                                            }),
                                            ...(value.type.name == 'poison' && {
                                                backgroundColor: TabsPokemon.POISON,
                                            }),
                                            ...(value.type.name == 'electric' && {
                                                backgroundColor: TabsPokemon.ELECTRIC,
                                            }),
                                            ...(value.type.name == 'ground' && {
                                                backgroundColor: TabsPokemon.GROUND,
                                            }),
                                            ...(value.type.name == 'fairy' && {
                                                backgroundColor: TabsPokemon.FAIRY,
                                            }),
                                            ...(value.type.name == 'fighting' && {
                                                backgroundColor: TabsPokemon.FIGHTING,
                                            }),
                                            ...(value.type.name == 'psychic' && {
                                                backgroundColor: TabsPokemon.PSYCHIC,
                                            }),
                                            ...(value.type.name == 'ghost' && {
                                                backgroundColor: TabsPokemon.GHOST,
                                            }),
                                            ...(value.type.name == 'flying' && {
                                                backgroundColor: TabsPokemon.FLYING,
                                            }),
                                            }}>

                        </Card>
                    })}
                </Stack>
            </Stack>
            <Stack sx={{backgroundColor:'#161a1d',
                        padding: 1.5,
                        borderRadius: 3,
                        border: 3
                    }}>
                <img src={image_p}></img>
            </Stack>
            <Stack sx={{backgroundColor:'#f5f3f4', 
                        borderRadius: 3,
                        padding: 2,
                        margin:1.5,
                        border: 2,
                        maxHeight: 120
                    }}> 
                <Typography variant='h6'>{name_p.toUpperCase()}</Typography>
                <Typography>Weight: {weight_p} hg</Typography> 
                <Typography>Height: {height_p} dm</Typography>
                <Typography>
                    Types: {types}
                </Typography>
            </Stack>
           
        </Stack>
    )
}

export default Pokemon;
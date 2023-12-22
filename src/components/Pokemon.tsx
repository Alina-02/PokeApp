import { useEffect, useState } from "react"

import { Card, IconButton, Stack, Typography } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

import { AppDispatch, RootState } from "../redux/store"
import { useAppDispatch } from "../redux/hooks"
import { toggleFavouritePokemon } from "../redux/slices/pokemonListSlice"
import { PokemonType} from "../types/pokemon.type"
import { useSelector } from "react-redux"


import { TabsPokemon } from "../utils/utils"
import { getPokemonTypeColor } from "../utils/utils"



interface PokemonPropTypes {
    id_p: number,
    image_p: string,
    name_p: string,
    weight_p: number,
    height_p: number,
    types_p: []
}

type type = {
    name: string
}

type typeList = {
    type: type
}




const Pokemon: React.FC<PokemonPropTypes>  = ({id_p, image_p, name_p, weight_p, height_p, types_p}) => {

    const dispatch: AppDispatch = useAppDispatch()
    const [favourite, setFavourite] = useState(false)
    const [types, setTypes] = useState('')
    const favouritePokemonList = useSelector((state:RootState) => state.pokemonList.favouritePokemons) 

    //set the types list
    const getTypesList = () => { 
        let t = ""
        types_p.map((value: typeList) => {
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
            setFavourite(true)
            dispatch(toggleFavouritePokemon(pokemon))
        }else{
            setFavourite(false)
            dispatch(toggleFavouritePokemon(pokemon))
        }
    }



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
                    <CatchingPokemonIcon sx={{fontSize:45, 
                                    ...(favourite && {
                                        color: '#ffa600',
                                      }),
                                      ...(!favourite && {
                                        color: '#5e5b52',
                                      }),
                                    }}/>
                </IconButton>
                <Stack direction='row' sx={{width: 'inherit', marginRight: 1}}>
                    {types_p.slice(0).reverse().map((value: typeList) => {
                        return <Card key={id_p + value.type.name} 
                                    sx={{ 
                                            minWidth: '9%', 
                                            borderRadius: 40, 
                                            maxHeight: '40px',
                                            marginTop: 1,
                                            marginLeft: 1,
                                            boxShadow: 3,
                                            border: 1,
                                            backgroundColor: getPokemonTypeColor(value.type.name)
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
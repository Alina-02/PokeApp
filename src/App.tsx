import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import PokemonList from './components/PokemonList'
import FavouritePokemonList from './components/FavouritePokemonList'
import { useState } from 'react';

import * as React from 'react';

const enum TabsPokemon {
  ALL = 'all',
  FAV = 'fav'
}


function App() {
  const [currentTab, setCurrentTab] = useState('all')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };


  return (
    <Box sx={{ justifyContent:'center', margin:5, minWidth: '450px'}}>
      <Stack sx={{border: 2,
                    borderTopLeftRadius:10, 
                    borderTopRightRadius: 10,
                }}>
      <Typography variant='h1' 
                  style={{textAlign: 'center', 
                          backgroundColor:'#ef233c', 
                          borderTopLeftRadius:10, 
                          borderTopRightRadius: 10,
                          padding: 20,
                          }}>
          PokeApp
        </Typography>
        </Stack>
        <Box sx={{  display: 'flex',
                    borderBottom: 1, 
                    borderColor: 'divider', 
                    marginBottom: 5, 
                    backgroundColor:'#ef233c',
                    justifyContent: 'center',
                    border: 2,
                  }}>
          <Tabs sx={{width:'50%'}} 
                value={currentTab} 
                onChange={handleChange} 
                variant="fullWidth"
                indicatorColor='secondary'
                textColor='secondary'
                centered>
            <Tab sx={{color:'black'}} 
                  label={TabsPokemon.ALL}
                  value={TabsPokemon.ALL}
                  />
            <Tab sx={{color:'black'}} 
                label={TabsPokemon.FAV}
                value={TabsPokemon.FAV}/>
          </Tabs>
        </Box>

      {currentTab === TabsPokemon.ALL && <PokemonList/>}
      {currentTab === TabsPokemon.FAV && <FavouritePokemonList/>}
      
    </Box>
  );
}


export default App

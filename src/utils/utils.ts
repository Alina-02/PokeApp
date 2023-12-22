export const enum TabsPokemon {
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


export function getPokemonTypeColor(type: string){
    console.log(type)

    switch (type) {
        case 'grass': return TabsPokemon.GRASS
        case 'fire': return TabsPokemon.FIRE
        case 'rock': return TabsPokemon.ROCK
        case 'water': return TabsPokemon.WATER
        case 'bug': return TabsPokemon.BUG
        case 'normal': return TabsPokemon.NORMAL
        case 'poison': return TabsPokemon.POISON
        case 'electric': return TabsPokemon.ELECTRIC
        case 'ground': return TabsPokemon.GROUND
        case 'fairy': return TabsPokemon.FAIRY
        case 'fighting': return TabsPokemon.FIGHTING
        case 'psychic': return TabsPokemon.PSYCHIC
        case 'ghost': return TabsPokemon.GHOST
        case 'flying': return TabsPokemon.FLYING
        case 'ice': return TabsPokemon.ICE
    }

}


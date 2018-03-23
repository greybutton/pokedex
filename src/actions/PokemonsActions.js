export const POKEMONS_GET_REQUEST = 'POKEMONS_GET_REQUEST'
export const POKEMONS_GET_SUCCESS = 'POKEMONS_GET_SUCCESS'
export const POKEMONS_GET_ERROR = 'POKEMONS_GET_ERROR'

export function pokemonsGet () {
  return {
    type: POKEMONS_GET_REQUEST
  }
}

export function pokemonsGetSuccess (pokemons) {
  return {
    type: POKEMONS_GET_SUCCESS,
    payload: pokemons
  }
}

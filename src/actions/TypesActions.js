export const POKEMONS_GET_TYPES_LIST_REQUEST = 'POKEMONS_GET_TYPES_LIST_REQUEST'
export const POKEMONS_GET_TYPES_LIST_SUCCESS = 'POKEMONS_GET_TYPES_LIST_SUCCESS'
export const POKEMONS_GET_TYPES_LIST_FAILED = 'POKEMONS_GET_TYPES_LIST_FAILED'

export function pokemonsGetTypesList () {
  return {
    type: POKEMONS_GET_TYPES_LIST_REQUEST
  }
}

export function pokemonsGetTypesListSuccess (data) {
  return {
    type: POKEMONS_GET_TYPES_LIST_SUCCESS,
    payload: data
  }
}

export function pokemonsGetTypesListFailed (error) {
  return {
    type: POKEMONS_GET_TYPES_LIST_FAILED,
    error
  }
}

export const POKEMONS_SEARCH_REQUEST = 'POKEMONS_SEARCH_REQUEST'
export const POKEMONS_SEARCH_SUCCESS = 'POKEMONS_SEARCH_SUCCESS'
export const POKEMONS_SEARCH_FAILED = 'POKEMONS_SEARCH_FAILED'

export const POKEMONS_SEARCH_CLOSE = 'POKEMONS_SEARCH_CLOSE'

export function pokemonsSearch (value) {
  return {
    type: POKEMONS_SEARCH_REQUEST,
    payload: {
      value
    }
  }
}

export function pokemonsSearchSuccess (data) {
  return {
    type: POKEMONS_SEARCH_SUCCESS,
    payload: data
  }
}

export function pokemonsSearchFailed (error) {
  return {
    type: POKEMONS_SEARCH_FAILED,
    error
  }
}

export function pokemonsSearchClose () {
  return {
    type: POKEMONS_SEARCH_CLOSE
  }
}

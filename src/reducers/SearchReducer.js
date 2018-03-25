import * as SearchActions from '../actions/SearchActions'

export const defaultState = {
  pokemon: null,
  loading: false,
  error: {}
}

export default (state = defaultState, action = {}) => {
  const { type, payload, error } = action
  switch (type) {
    case SearchActions.POKEMONS_SEARCH_REQUEST: {
      return {
        loading: true
      }
    }
    case SearchActions.POKEMONS_SEARCH_SUCCESS: {
      return {
        ...state,
        pokemon: payload.pokemon,
        loading: false
      }
    }
    case SearchActions.POKEMONS_SEARCH_FAILED: {
      return {
        ...state,
        error,
        loading: false
      }
    }
    case SearchActions.POKEMONS_SEARCH_CLOSE: {
      return {
        loading: false
      }
    }
    default:
      return state
  }
}

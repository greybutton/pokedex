import * as PokemonsActions from '../actions/PokemonsActions'

export const defaultState = {
  pokemons: [],
  pagination: {},
  loading: false,
  errors: {}
}

export default (state = defaultState, action = {}) => {
  const { type, payload, error } = action
  switch (type) {
    case PokemonsActions.POKEMONS_GET_REQUEST:
    case PokemonsActions.POKEMONS_GET_PREV_REQUEST:
    case PokemonsActions.POKEMONS_GET_NEXT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case PokemonsActions.POKEMONS_GET_SUCCESS:
    case PokemonsActions.POKEMONS_GET_PREV_SUCCESS:
    case PokemonsActions.POKEMONS_GET_NEXT_SUCCESS: {
      return {
        ...state,
        pokemons: payload.pokemons,
        pagination: payload.pagination,
        loading: false
      }
    }
    case PokemonsActions.POKEMONS_GET_FAILED:
    case PokemonsActions.POKEMONS_GET_PREV_FAILED:
    case PokemonsActions.POKEMONS_GET_NEXT_FAILED: {
      return {
        ...state,
        error,
        loading: false
      }
    }
    default:
      return state
  }
}

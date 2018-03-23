import * as PokemonsActions from '../actions/PokemonsActions'

export const defaultState = {
  pokemons: [],
  pagination: {},
  loading: false,
  errors: {}
}

export default (state = defaultState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case PokemonsActions.POKEMONS_GET_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case PokemonsActions.POKEMONS_GET_SUCCESS: {
      return {
        ...state,
        pokemons: payload.pokemons,
        pagination: payload.pagination,
        loading: false
      }
    }
    default:
      return state
  }
}

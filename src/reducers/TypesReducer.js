import * as TypesActions from '../actions/TypesActions'

export const defaultState = {
  types: [],
  loading: false,
  error: {}
}

export default (state = defaultState, action = {}) => {
  const { type, payload, error } = action
  switch (type) {
    case TypesActions.POKEMONS_GET_TYPES_LIST_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case TypesActions.POKEMONS_GET_TYPES_LIST_SUCCESS: {
      return {
        ...state,
        types: payload.types,
        loading: false
      }
    }
    case TypesActions.POKEMONS_GET_TYPES_LIST_FAILED: {
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

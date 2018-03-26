import * as TypesActions from '../actions/TypesActions'

const defaultState = {
  types: [],
  loading: false,
  error: {}
}

export default (state = defaultState, action = {}) => {
  const { type, payload, error } = action
  switch (type) {
    case TypesActions.pokemonsGetTypesList.REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case TypesActions.pokemonsGetTypesList.SUCCESS: {
      return {
        ...state,
        types: payload.types,
        loading: false
      }
    }
    case TypesActions.pokemonsGetTypesList.FAILURE: {
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

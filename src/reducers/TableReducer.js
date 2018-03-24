import * as TableActions from '../actions/TableActions'

export const defaultState = {
  pokemons: [],
  pagination: {},
  loading: false,
  error: {}
}

export default (state = defaultState, action = {}) => {
  const { type, payload, error } = action
  switch (type) {
    case TableActions.POKEMONS_GET_REQUEST:
    case TableActions.POKEMONS_GET_PREV_REQUEST:
    case TableActions.POKEMONS_GET_NEXT_REQUEST:
    case TableActions.POKEMONS_GET_TYPE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case TableActions.POKEMONS_GET_SUCCESS:
    case TableActions.POKEMONS_GET_PREV_SUCCESS:
    case TableActions.POKEMONS_GET_NEXT_SUCCESS:
    case TableActions.POKEMONS_GET_TYPE_SUCCESS: {
      return {
        ...state,
        pokemons: payload.pokemons,
        pagination: payload.pagination,
        loading: false
      }
    }
    case TableActions.POKEMONS_GET_FAILED:
    case TableActions.POKEMONS_GET_PREV_FAILED:
    case TableActions.POKEMONS_GET_NEXT_FAILED:
    case TableActions.POKEMONS_GET_TYPE_FAILED: {
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

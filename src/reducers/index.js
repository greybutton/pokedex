import { combineReducers } from 'redux'
import PokemonsReducer from './PokemonsReducer'

const reducers = {
  pokemonsStore: PokemonsReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer

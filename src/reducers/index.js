import { combineReducers } from 'redux'
import TypesReducer from './TypesReducer'

const reducers = {
  typesStore: TypesReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer

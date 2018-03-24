import { combineReducers } from 'redux'
import TableReducer from './TableReducer'
import TypesReducer from './TypesReducer'

const reducers = {
  tableStore: TableReducer,
  typesStore: TypesReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer

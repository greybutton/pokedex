import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import TableReducer from './TableReducer'
import TypesReducer from './TypesReducer'
import SearchReducer from './SearchReducer'

const reducers = {
  form: formReducer,
  tableStore: TableReducer,
  typesStore: TypesReducer,
  searchStore: SearchReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer

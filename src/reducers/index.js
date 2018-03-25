import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import TableReducer from './TableReducer'
import TypesReducer from './TypesReducer'

const reducers = {
  form: formReducer,
  tableStore: TableReducer,
  typesStore: TypesReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer

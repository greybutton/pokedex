import { put, call } from 'redux-saga/effects'
import * as api from './api'
import * as TypesActions from '../actions/TypesActions'

export function * fetchPokemonsTypesList () {
  try {
    const { data: { results } } = yield call(api.getTypes)
    const result = {
      types: results
    }
    yield put(TypesActions.pokemonsGetTypesList.success(result))
  } catch (error) {
    yield put(TypesActions.pokemonsGetTypesList.failure(error))
  }
}

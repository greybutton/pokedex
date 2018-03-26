import { takeLatest } from 'redux-saga/effects'
import * as TypesSagas from './TypesSagas'
import * as TypesActions from '../actions/TypesActions'

export function * watchPokemonsTypesListRequest () {
  yield takeLatest(TypesActions.pokemonsGetTypesList.REQUEST, TypesSagas.fetchPokemonsTypesList)
}

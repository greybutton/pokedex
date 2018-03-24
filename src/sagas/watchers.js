import { takeLatest } from 'redux-saga/effects'
import * as TableSagas from './TableSagas'
import * as TypesSagas from './TypesSagas'
import * as TableActions from '../actions/TableActions'
import * as TypesActions from '../actions/TypesActions'

export function * watchPokemonsRequest () {
  yield takeLatest(TableActions.POKEMONS_GET_REQUEST, TableSagas.fetchPokemons)
}

export function * watchPokemonsPrevRequest () {
  yield takeLatest(TableActions.POKEMONS_GET_PREV_REQUEST, TableSagas.fetchPokemonsPrev)
}

export function * watchPokemonsNextRequest () {
  yield takeLatest(TableActions.POKEMONS_GET_NEXT_REQUEST, TableSagas.fetchPokemonsNext)
}

export function * watchPokemonsTypesListRequest () {
  yield takeLatest(TypesActions.POKEMONS_GET_TYPES_LIST_REQUEST, TypesSagas.fetchPokemonsTypesList)
}

export function * watchPokemonsTypeRequest () {
  yield takeLatest(TableActions.POKEMONS_GET_TYPE_REQUEST, TableSagas.fetchPokemonsType)
}

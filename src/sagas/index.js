import { fork, all } from 'redux-saga/effects'
import * as watchers from './watchers'

export default function * root () {
  yield all([
    fork(watchers.watchPokemonsRequest),
    fork(watchers.watchPokemonsPrevRequest),
    fork(watchers.watchPokemonsNextRequest),
    fork(watchers.watchPokemonsTypesListRequest),
    fork(watchers.watchPokemonsTypeRequest)
  ])
}

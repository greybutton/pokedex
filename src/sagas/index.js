import { fork, all } from 'redux-saga/effects'
import * as PokemonsWatchers from './PokemonsWatchers'

export default function * root () {
  yield all([
    fork(PokemonsWatchers.watchPokemonsRequest),
    fork(PokemonsWatchers.watchPokemonsPrevRequest),
    fork(PokemonsWatchers.watchPokemonsNextRequest)
  ])
}

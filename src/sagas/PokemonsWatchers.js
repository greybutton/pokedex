import { takeLatest } from 'redux-saga/effects'
import * as PokemonsSagas from './PokemonsSagas'
import * as PokemonsActions from '../actions/PokemonsActions'

export function * watchPokemonsRequest () {
  yield takeLatest(PokemonsActions.POKEMONS_GET_REQUEST, PokemonsSagas.fetchPokemons)
}

export function * watchPokemonsPrevRequest () {
  yield takeLatest(PokemonsActions.POKEMONS_GET_PREV_REQUEST, PokemonsSagas.fetchPokemonsPrev)
}

export function * watchPokemonsNextRequest () {
  yield takeLatest(PokemonsActions.POKEMONS_GET_NEXT_REQUEST, PokemonsSagas.fetchPokemonsNext)
}

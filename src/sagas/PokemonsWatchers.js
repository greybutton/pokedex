import { takeLatest } from 'redux-saga/effects'
import * as PokemonsSagas from './PokemonsSagas'
import * as PokemonsActions from '../actions/PokemonsActions'

export function * watchPokemonsRequest () {
  yield takeLatest(PokemonsActions.POKEMONS_GET_REQUEST, PokemonsSagas.fetchPokemons)
}

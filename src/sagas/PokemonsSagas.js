import { Pokedex } from 'pokeapi-js-wrapper'
import { put, call } from 'redux-saga/effects'
import * as PokemonsActions from '../actions/PokemonsActions'

const options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}

const P = new Pokedex(options)

export function getPokemons (interval = { limit: 9, offset: 0 }) {
  return P.getPokemonsList(interval)
    .then((response) => {
      return response
    })
}

export function getPokemonsByUrl (urls = []) {
  return P.resource(urls)
    .then((response) => {
      return response
    })
}

export function * fetchPokemons () {
  const { count, prev, next, results } = yield call(getPokemons)
  const pagination = { count, prev, next }
  const urls = results.map(pokemon => pokemon.url)
  const pokemons = yield call(getPokemonsByUrl, urls)
  const result = {
    pagination,
    pokemons
  }
  yield put(PokemonsActions.pokemonsGetSuccess(result))
}

import Pokedex from 'pokedex-promise-v2'
import { put, call } from 'redux-saga/effects'
import * as PokemonsActions from '../actions/PokemonsActions'

const options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 10 * 1000 // 10s
}

const P = new Pokedex(options)

export function getPokemons (interval = { limit: 8, offset: 0 }) {
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
  try {
    const { count, previous, next, results } = yield call(getPokemons)
    const pagination = { count, previous, next }
    const urls = results.map(pokemon => pokemon.url)
    const pokemons = yield call(getPokemonsByUrl, urls)
    const result = {
      pagination,
      pokemons
    }
    yield put(PokemonsActions.pokemonsGetSuccess(result))
  } catch (error) {
    yield put(PokemonsActions.pokemonsGetFailed(error))
  }
}

export function * fetchPokemonsPrev ({ payload }) {
  const { url } = payload
  try {
    const { count, previous, next, results } = yield call(getPokemonsByUrl, url)
    const pagination = { count, previous, next }
    const urls = results.map(pokemon => pokemon.url)
    const pokemons = yield call(getPokemonsByUrl, urls)
    const result = {
      pagination,
      pokemons
    }
    yield put(PokemonsActions.pokemonsGetPrevSuccess(result))
  } catch (error) {
    yield put(PokemonsActions.pokemonsGetPrevFailed(error))
  }
}

export function * fetchPokemonsNext ({ payload }) {
  const { url } = payload
  try {
    const { count, previous, next, results } = yield call(getPokemonsByUrl, url)
    const pagination = { count, previous, next }
    const urls = results.map(pokemon => pokemon.url)
    const pokemons = yield call(getPokemonsByUrl, urls)
    const result = {
      pagination,
      pokemons
    }
    yield put(PokemonsActions.pokemonsGetNextSuccess(result))
  } catch (error) {
    yield put(PokemonsActions.pokemonsGetNextFailed(error))
  }
}

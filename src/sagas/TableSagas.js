import { put, call } from 'redux-saga/effects'
import * as api from './api'
import * as TableActions from '../actions/TableActions'

export function * fetchPokemons () {
  try {
    const { data: { count, previous, next, results } } = yield call(api.getPokemons, { limit: 9 })
    const pagination = { count, previous, next }
    const urls = results.map(pokemon => api.getUrl(pokemon.url))
    const pokemonsAll = yield call(api.getAll, urls)
    const pokemons = pokemonsAll.map(({ data }) => data)
    const result = {
      pagination,
      pokemons
    }
    yield put(TableActions.pokemonsGetSuccess(result))
  } catch (error) {
    yield put(TableActions.pokemonsGetFailed(error))
  }
}

export function * fetchPokemonsPrev ({ payload }) {
  const { url } = payload
  try {
    const { data: { count, previous, next, results } } = yield call(api.getUrl, url)
    const pagination = { count, previous, next }
    const urls = results.map(pokemon => api.getUrl(pokemon.url))
    const pokemonsAll = yield call(api.getAll, urls)
    const pokemons = pokemonsAll.map(({ data }) => data)
    const result = {
      pagination,
      pokemons
    }
    yield put(TableActions.pokemonsGetPrevSuccess(result))
  } catch (error) {
    yield put(TableActions.pokemonsGetPrevFailed(error))
  }
}

export function * fetchPokemonsNext ({ payload }) {
  const { url } = payload
  try {
    const { data: { count, previous, next, results } } = yield call(api.getUrl, url)
    const pagination = { count, previous, next }
    const urls = results.map(pokemon => api.getUrl(pokemon.url))
    const pokemonsAll = yield call(api.getAll, urls)
    const pokemons = pokemonsAll.map(({ data }) => data)
    const result = {
      pagination,
      pokemons
    }
    yield put(TableActions.pokemonsGetNextSuccess(result))
  } catch (error) {
    yield put(TableActions.pokemonsGetNextFailed(error))
  }
}

export function * fetchPokemonsType ({ payload }) {
  const { url } = payload
  try {
    const { data: { pokemon } } = yield call(api.getUrl, url)
    const urls = pokemon
      .map(item => api.getUrl(item.pokemon.url))
    const pokemonsAll = yield call(api.getAll, urls)
    const pokemons = pokemonsAll.map(({ data }) => data)
    const result = {
      pokemons
    }
    yield put(TableActions.pokemonsGetTypeSuccess(result))
  } catch (error) {
    yield put(TableActions.pokemonsGetTypeFailed(error))
  }
}

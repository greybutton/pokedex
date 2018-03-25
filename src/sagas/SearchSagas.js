import { put, call } from 'redux-saga/effects'
import * as api from './api'
import * as SearchActions from '../actions/SearchActions'

export function * fetchPokemonsSearch ({ payload }) {
  const { value } = payload
  try {
    const { data, status } = yield call(api.getPokemonsSearch, value)
    if (status !== 200) {
      yield put(SearchActions.pokemonsSearchFailed({
        code: status,
        data
      }))
    } else {
      const result = {
        pokemon: data
      }
      yield put(SearchActions.pokemonsSearchSuccess(result))
    }
  } catch (error) {
    yield put(SearchActions.pokemonsSearchFailed(error))
  }
}

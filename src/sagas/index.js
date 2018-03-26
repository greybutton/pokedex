import { fork, all } from 'redux-saga/effects'
import { actionsWatcherSaga } from 'redux-saga-actions'
import * as watchers from './watchers'

export default function * root () {
  yield [
    all([
      fork(watchers.watchPokemonsTypesListRequest)
    ]),
    actionsWatcherSaga
  ]
}

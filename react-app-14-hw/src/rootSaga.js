import {all, call} from 'redux-saga/effects'

import {todosWatcher} from './watchers'

export function* rootSaga(){
    yield all([
        call(todosWatcher)
    ])
}
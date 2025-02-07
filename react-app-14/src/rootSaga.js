import {all, call} from 'redux-saga/effects'
import {swapiWatcher} from './watchers'

export function* rootSaga(){
    yield all([
        call(swapiWatcher)
    ]);
}
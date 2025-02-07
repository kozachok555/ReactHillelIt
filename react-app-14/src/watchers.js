import {takeEvery} from 'redux-saga/effects'

import {getSwapiApi} from "./swapiSlice"

import {callGetSwapiContent} from "./workers"

export function*  swapiWatcher(){
    yield takeEvery(getSwapiApi.type, callGetSwapiContent)
}
import {all, put, takeEvery} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, setMeta, setLocation } from './actions'

es6promise.polyfill();

function* getMeta() {
    try {
        const res = yield fetch('https://jsonplaceholder.typicode.com/users');
        const data = yield res.json();
        yield put(setMeta(data))
    } catch (err) {
        console.error(err);
    }
}

function* getLocation() {
    try {
        const res = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const data = yield res.json();
        yield put(setLocation(data))
    } catch (err) {
        console.error(err);
    }
}

function* rootSaga() {
    yield all([
        takeEvery(actionTypes.SET_META_ASYNC, getMeta),
        takeEvery(actionTypes.GET_LOCATION_ASYNC, getLocation)
    ])
}

export default rootSaga;
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

function* getLocation({ data }) {
    try {
      const address = data.replace(/ /g, '+');
      const res = yield fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBROMHKQ87U_eanb0KhruMPmlwAAmOsf0k&address=${address}&sensor=false&language=ru`);
      const dataJson = yield res.json();
      yield put(setLocation(dataJson))
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
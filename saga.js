import {all, put, takeEvery} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, setMeta, setLocation, setError } from './actions'

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
      const res = yield fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBROMHKQ87U_eanb0KhruMPmlwAAmOsf0k&address=${data}&sensor=false&language=ru`);
      const dataJson = yield res.json();

      if (dataJson.status === 'OK') {
        yield put(setLocation(dataJson))
      } else {
        console.log('Error --->', dataJson.error_message);
        yield put(setError(dataJson.error_message))
      }

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
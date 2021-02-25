import { GET_TODO } from './Types';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { returnErrors } from '../Error/Error';

import { getListTodo, endLoadingTodo, loadingTodo } from './ActionTodo'; // Action todo for aplication who return object with type or type payload

const urlDB = process.env.REACT_APP_DB_URL; // urlDB

// Worker get list
function* workerLoadTodo() {
   try {
      yield put(loadingTodo());
      const res = yield call(() => axios.get(`${urlDB}/todos.json`)); // request to database and response
      const payload = Object.keys(res.data).map(key => ({ ...res.data[key], id: key })); // Adapter for data from firebase
      yield put(getListTodo(payload)); // set todo to reduser
   } catch (err) {
      yield put(returnErrors(new Error(`Can not get todo: ${err}!`))); // set todo to reduser errors
      yield put(endLoadingTodo()); // off loading
   }
}

// export watcher in combainerWatcher
export function* watchLoadTodo() {
   yield takeEvery(GET_TODO, workerLoadTodo); // Start worker with action type
}

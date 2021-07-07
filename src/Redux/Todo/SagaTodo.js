import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { returnErrors } from '../Error/Error';

import { GET_TODO, CREATE_TODO, REMOVE_TODO, REMOVE_STORE_TODO, UPDATE_TODO, UPDATE_STORE_TODO } from './Types'; // Types todo

import { getListTodo, endLoadingTodo, loadingTodo } from './ActionTodo'; // Action todo for aplication who return object with type or type payload

const urlDB = process.env.REACT_APP_DB_URL; // urlDB

// Worker get list
function* workerGetTodo() {
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
function* workerCreateTodo(action) {
   console.log('test=====================', action);
   try {
      yield put(loadingTodo());
      yield call(() => axios.post(`${urlDB}/todos.json`, action.data)); // request to database and response
      yield put(endLoadingTodo()); // off loading
   } catch (err) {
      console.error(err);
      yield put(returnErrors(new Error(`Can not get todo: ${err}!`))); // set todo to reduser errors
      yield put(endLoadingTodo()); // off loading
   }
}
function* workerRemoveTodo(action) {
   try {
      yield put(loadingTodo());
      yield call(() => axios.delete(`${urlDB}/todos/${action.id}.json`)); // request to database and response
      yield put({ type: REMOVE_STORE_TODO, payload: action.id }); // off loading
      yield put(endLoadingTodo()); // off loading
   } catch (err) {
      yield put(returnErrors(new Error(`Can not get todo: ${err}!`))); // set todo to reduser errors
      yield put(endLoadingTodo()); // off loading
   }
}
function* workerUpdateTodo(action) {
   console.log('object', action);
   try {
      yield put(loadingTodo());
      const res = yield call(() => axios.put(`${urlDB}/todos/${action.data.id}.json`, action.data)); // request to database and response
      yield put({ type: UPDATE_STORE_TODO, payload: res.data }); // off loading
   } catch (err) {
      yield put(returnErrors(new Error(`Can not get todo: ${err}!`))); // set todo to reduser errors
      yield put(endLoadingTodo()); // off loading
   }
}

// export watcher in combainerWatcher
export function* watchLoadTodo() {
   yield takeEvery(GET_TODO, workerGetTodo); // Start worker with action type
   yield takeEvery(CREATE_TODO, workerCreateTodo); // Start worker with action type
   yield takeEvery(REMOVE_TODO, workerRemoveTodo); // Start worker with action type
   yield takeEvery(UPDATE_TODO, workerUpdateTodo); // Start worker with action type
}

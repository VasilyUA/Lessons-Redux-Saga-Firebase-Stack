import { LOADING_TODO } from './Types';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { returnErrors } from '../Error/Error';

import { getListTodo, endLoadingTodo } from './ActionTodo'; // Action todo

const urlDB = process.env.REACT_APP_DB_URL; // urlDB

const getTotoList = () => axios.get(`${urlDB}/todos.json`); // request to database

function* workerLoadTodo() {
   try {
      const res = yield call(getTotoList); // response
      const payload = Object.keys(res.data).map(key => ({ ...res.data[key], id: key }));

      yield put(getListTodo(payload)); // set todo to reduser
   } catch (err) {
      yield put(returnErrors(new Error(`Can not get todo: ${err}!`))); // set todo to reduser errors
      yield put(endLoadingTodo()); // off loading
   }
}

export function* watchLoadTodo() {
   // run in index
   yield takeEvery(LOADING_TODO, workerLoadTodo);
}

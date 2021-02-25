import { GET_TODO, LOADING_TODO, END_LOADING_TODO } from './Types';

// action
export const getListTodo = payload => ({ type: GET_TODO, payload });
export const endLoadingTodo = () => ({ type: END_LOADING_TODO });
export const loadingTodo = () => ({ type: LOADING_TODO });

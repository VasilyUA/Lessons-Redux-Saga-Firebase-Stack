import { FETCH_TODO, LOADING_TODO, END_LOADING_TODO, UPDATE_STORE_TODO, REMOVE_STORE_TODO } from './Types';

const initialState = { data: [], loading: false };

// Reduser
export const todo = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_TODO:
         return {
            ...state,
            data: action.payload,
            loading: false,
         };
      case LOADING_TODO:
         return {
            ...state,
            loading: true,
         };
      case UPDATE_STORE_TODO:
         return {
            ...state,
            data: state.data.map(todo => (todo.id === action.payload.id ? action.payload : todo)),
            loading: false,
         };
      case REMOVE_STORE_TODO:
         return {
            ...state,
            data: state.data.filter(todo => todo.id !== action.payload),
            loading: false,
         };
      case END_LOADING_TODO:
         return {
            ...state,
            loading: false,
         };
      default:
         return state;
   }
};

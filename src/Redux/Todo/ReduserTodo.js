import { FETCH_TODO, LOADING_TODO, END_LOADING_TODO } from './Types';

const initialState = { data: {}, loading: false };

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
      case END_LOADING_TODO:
         return {
            ...state,
            loading: false,
         };
      default:
         return state;
   }
};

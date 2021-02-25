const GET_ERRORS = 'GET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

const initialState = {
   err: null,
};

export const returnErrors = error => ({ type: GET_ERRORS, payload: error.message });
export const clearErrors = () => ({ type: CLEAR_ERRORS });

export const error = (state = initialState, action) => {
   switch (action.type) {
      case GET_ERRORS:
         return {
            ...state,
            err: action.payload,
         };
      case CLEAR_ERRORS:
         return {
            ...state,
            err: null,
         };
      default:
         return state;
   }
};

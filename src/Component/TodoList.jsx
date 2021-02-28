import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CREATE_TODO } from '../Redux/Todo/Types';

export default function TodoList() {
   const [state, setState] = useState({ description: '' });
   const dispatch = useDispatch();
   const onSubmit = e => {
      e.preventDefault();
      dispatch({ type: CREATE_TODO, data: state });
      setState({ description: '' });
      window.location.href = '/';
   };
   return (
      <div className="container">
         <form onSubmit={onSubmit}>
            <input type="text" name="description" value={state.description} onChange={e => setState({ ...state, description: e.target.value })} required />
            <input type="submit" value="Add todo" />
         </form>
      </div>
   );
}

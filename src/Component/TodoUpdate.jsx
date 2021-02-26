import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { UPDATE_TODO } from '../Redux/Todo/Types';

export default function TodoUpdate() {
   let { id } = useParams();
   let { data } = useSelector(state => state.todo);
   data = data.find(item => item.id === id); // eslint-disable-line
   const [state, setState] = useState(data);
   const dispatch = useDispatch();
   const history = useHistory();
   const onSubmit = e => {
      e.preventDefault();
      dispatch({ type: UPDATE_TODO, data: state });
      history.push('/');
   };
   return (
      <form onSubmit={onSubmit}>
         <input type="text" name="description" value={state.description} onChange={e => setState({ ...state, description: e.target.value })} required />
         <input type="submit" value="Update todo" />
      </form>
   );
}

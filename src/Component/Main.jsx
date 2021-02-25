import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Component
import TodoList from './TodoList';

// Coll watcher saga by type
import { GET_TODO } from '../Redux/Todo/Types';

export default function Main() {
   const dispatch = useDispatch();
   const store = useSelector(state => state.language);
   console.log(store);
   const onClick = () => dispatch({ type: GET_TODO });
   return (
      <div>
         <button onClick={onClick}>ClickMe</button>
         <TodoList />
      </div>
   );
}

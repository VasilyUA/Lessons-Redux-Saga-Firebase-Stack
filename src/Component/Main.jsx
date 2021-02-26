import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// Coll watcher saga by type
import { GET_TODO, REMOVE_TODO } from '../Redux/Todo/Types';

export default function Main() {
   const dispatch = useDispatch();
   const { data } = useSelector(state => state.todo);
   useEffect(() => {
      dispatch({ type: GET_TODO });
      // eslint-disable-next-line
   }, []);
   const onClick = todoId => dispatch({ type: REMOVE_TODO, id: todoId });
   return (
      <div>
         <NavLink to="/add" exact activeStyle={{ color: 'green' }}>
            Add todo
         </NavLink>
         <ul>
            {data.map(todo => (
               <li key={todo.id}>
                  {todo.description} <button onClick={() => onClick(todo.id)}>remove</button> <Link to={`/update/${todo.id}`}>Update</Link>
               </li>
            ))}
         </ul>
      </div>
   );
}

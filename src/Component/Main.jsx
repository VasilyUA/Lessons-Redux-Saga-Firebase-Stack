import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <div className="container">
         <br />
         <ul className="list-group">
            {data.map(todo => (
               <li key={todo.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                     <h3>{todo.description}</h3>
                     <div>
                        <button style={{ marginRight: '10px', marginLeft: '10px' }} type="button" className="btn btn-outline-danger" onClick={() => onClick(todo.id)}>
                           <i className="fas fa-trash-alt" />
                        </button>
                        <Link to={`/update/${todo.id}`} style={{ marginRight: '10px', marginLeft: '10px' }} type="button" className="btn btn-primary">
                           <i className="fas fa-pencil-alt" />
                        </Link>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { loadingTodo } from '../Redux/Todo/ActionTodo';

export default function Main() {
   const dispatch = useDispatch();
   const onClick = () => dispatch(loadingTodo());
   return (
      <div>
         <button onClick={onClick}>ClickMe</button>
      </div>
   );
}

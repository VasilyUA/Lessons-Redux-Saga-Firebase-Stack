import React from 'react';
import { BrowserRouter as Routs, Route, Switch } from 'react-router-dom';

// Redux setting
import { Provider } from 'react-redux';
import store from './Redux/index';

// Style
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';

// Component
import Main from './Component/Main';
import TodoList from './Component/TodoList';
import TodoUpdate from './Component/TodoUpdate';

export default function App() {
   return (
      <Provider store={store}>
         <Routs>
            <main>
               <Switch>
                  <Route path="/" exact render={() => <Main />} />
                  <Route path="/add" exact render={() => <TodoList />} />
                  <Route path="/update/:id" exact render={() => <TodoUpdate />} />
                  <Route path="*" exact render={() => <div>Err</div>} />
               </Switch>
            </main>
         </Routs>
      </Provider>
   );
}

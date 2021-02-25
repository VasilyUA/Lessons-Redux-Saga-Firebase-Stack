import React from 'react';
import { BrowserRouter as Routs, Route, Switch } from 'react-router-dom';

// Redux setting
import { Provider } from 'react-redux';
import store from './Redux/index';

// Component
import Main from './Component/Main';

// Style
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';

export default function App() {
   return (
      <Provider store={store}>
         <Routs>
            <main>
               <Switch>
                  <Route path="/" exact render={() => <Main />} />
                  <Route path="*" exact render={() => <div>Err</div>} />
               </Switch>
            </main>
         </Routs>
      </Provider>
   );
}

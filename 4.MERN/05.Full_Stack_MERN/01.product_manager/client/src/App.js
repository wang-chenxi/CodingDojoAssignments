import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';

import Details from './views/Details';
import Dashboard from './views/Dashboard';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" >
                <Dashboard />
              </Route>
              <Route exact path="/:id">
                <Details />
              </Route>
              <Route exact path="/:id/edit">
                <Edit />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

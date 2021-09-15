import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Details from './views/Details';
import Dashboard from './views/Dashboard';
import Edit from './views/Edit';
import Create from './views/Create';

function App() {
  return (
    <div className="App container">
      <h1 className="text-start">Favorite authors</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Dashboard />
          </Route>
          <Route exact path="/new" >
            <Create />
          </Route>
          <Route exact path="/:id">
            <Details />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

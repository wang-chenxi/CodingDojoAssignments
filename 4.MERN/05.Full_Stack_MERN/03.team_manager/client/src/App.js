import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from './components/Nav';
import Dashboard from './views/Dashboard';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="border border-dark m-3 p-5">
          <Switch>
            <Route exact path="/players/list" >
              <Dashboard />
            </Route>
            <Route exact path="/status/game/:id" >
              <Update />
            </Route>
            <Route exact path="/players/addplayer" >
              <Create />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;

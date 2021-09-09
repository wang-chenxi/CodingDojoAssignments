import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form';
import Planets from './components/Planets';
import People from './components/People';
import Error from './components/Error';

function App() {
  return (
    <div className="App d-flex flex-column bg-light gap-5 justify-content-center align-items-center text-start w-50">
      <BrowserRouter>
        <h1>Luke APIwalker</h1>
        <Form />
        <switch>
          <Route path="/planets/:id">
            <Planets />
          </Route>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

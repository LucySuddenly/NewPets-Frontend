import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/containers/Main.js'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() =>(<Home/>)}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

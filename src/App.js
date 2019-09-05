import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/containers/Main.js'
import Login from './components/containers/Login.js'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <>
      <Navbar sticky="top" variant="dark" bg="dark">
        <a href="/">
          <Navbar.Text>
            NewPets
          </Navbar.Text>
        </a>
        <Navbar.Collapse className="justify-content-end">
          <Button href="/login">
            Login or Sign Up
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() =>(<Home/>)}/>
            <Route exact path="/login" render={()=>(<Login/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

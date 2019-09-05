import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {withRouter} from 'react-router';
import './App.css';
import Home from './components/containers/Main.js'
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
          <Button>
            Login or Sign Up
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() =>(<Home/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default withRouter(App);

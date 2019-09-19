import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
      <nav class="flex items-center justify-between flex-wrap bg-purple-500 p-4">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-bold text-xl tracking-tight">PixelPets</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="/explore" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
              Explore
            </a>
            <a href="/arcade" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
              Arcade
            </a>
            <a href="/news" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white">
              News
            </a>
          </div>
          <div>
            <a href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
          </div>
        </div>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/"/>
          <Route exact path="/explore"/>
          <Route exact path="/arcade"/>
          <Route exact path="/news"/>
          <Route exact path="/login"/>
        </Switch>
      </Router>
      </>
    )
  }
}

export default App;

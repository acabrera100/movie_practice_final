import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Navbar from  './components/navbar'
import Home from './components/home'
import SingleMovie from './components/singlemovie'
import Movies from './components/movies'
import './Css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/movies" component={Movies} />
      </Switch>
      </div>
    );
  }
}

export default App;

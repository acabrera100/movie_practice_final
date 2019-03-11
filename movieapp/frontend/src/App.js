import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Navbar from  './components/navbar'
import Home from './components/home'
// import SingleMovie from './components/singlemovie'
import Genre from './components/genre'
import Movies from './components/movies'
import './Css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/home" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies/byGenre" component={Genre} />
      </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../Css/AllMovies.css";
import axios from 'axios';
class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies:[]
    };
  }

  componentDidMount(){
    axios.get('/movies').then(res=>{
      return this.setState({
        movies:res.data.movies
      })
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="movie-body">
        <div className="movie-info">
          <form className="searchBar">
            <input placeholder="Search by Title" type="text" />
            <br/>
            <input type="submit" />

          </form>
        </div>
      </div>
    );
  }
}
export default Movies;

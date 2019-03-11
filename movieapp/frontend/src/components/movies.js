import React, { Component } from "react";
import "../Css/Movies.css";
class Movies extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="movie-body">
        <div className="movie-info">
          <form className="searchBar">
            <input placeholder="Search by Title" type="text" />
            <input type="submit" />
            <h2>Page will render all movies on mount. </h2>
          </form>
        </div>
      </div>
    );
  }
}
export default Movies;

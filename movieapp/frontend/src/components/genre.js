import React, { Component } from "react";
import "../Css/AllMovies.css";
class Genre extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="movie-body">
        <div className="movie-info">
        <h2>Page will render all movies by genre on mount. </h2>
        <br />
        <h4>Each movie should link to that movie's individual page </h4>
        <br/>
        <h4>Each movie item should include a 100x100px area of space for the movie's image. The movie image should not warp, but adjust its size to fit this space. Each movie item should have a 2px solid white border, with at least 15px of vertical space between each item.</h4>
      </div>
      </div>
    );
  }
}
export default Genre;

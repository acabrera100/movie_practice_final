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
          <h4>Each movie should link to that movie's individual page </h4>
          <br />
          <h4>
            Render all movies on mount, then when you make a selection clear the
            page with movies only by that genre.
          </h4>
          <form>
            <select className="SearchbyGenre">
              <option value="AllMoviesOnMount" />
              <option value="genre1">genre1</option>
              <option value="genre2">genre2</option>
              <option value="genre3">genre3</option>
              <option value="genre4">genre4</option>
            </select>
            <input type="submit" value="Search by Genre" />
          </form>
          <div className="movieByGenre">
          <ul>
          <li>Movie Title#1</li>
          <li><img className='movie-images'src=" https://i.pinimg.com/originals/da/06/5e/da065e13fc0f9d8ba57c8c05d9ee048c.jpg" alt='img placeholder'/></li>
          <li>Average Rating: 100</li>
          <br/>
          <li>Movie Title#2</li>
          <li><img className='movie-images'src=" https://i.pinimg.com/originals/39/c3/a2/39c3a28e321aa2d278a2b52b81bbf712.jpg" alt='img placeholder'/></li>
          <li>Average Rating: 100</li>

          </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Genre;

import React, { Component } from "react";
import "../Css/AllMovies.css";
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
            <br />
            <h4>
              When a user enters part or all of a movie's title (not case
              sensitive){" "}
            </h4>
            <br />
            <h4>
              {" "}
              "Search" (submit), the list of movies should be filtered to only
              the movies with titles that correspond to what the user was
              searching for.
            </h4>
            <br />
            <h4>
              Each movie item should include a 100x100px area of space for the
              movie's image. The movie image should not warp, but adjust its
              size to fit this space.
              <h4>Each movie item should have a 2px solid
              white border, with at least 15px of vertical space between each
              item.</h4>
            </h4>
            <br />
            <h4>Each movie should link to that movie's individual page </h4>
          </form>
          <div className="movie-info">
            <h3>Title</h3>
            <br />
            <h3>Genre</h3>

            <img className='movie-images'src="https://i.pinimg.com/originals/da/06/5e/da065e13fc0f9d8ba57c8c05d9ee048c.jpg" alt='img placeholder'/>
            <h3> Average Ratings</h3>
            <br />
            <form className="comments">
              <input type="text" />
              <input type="submit" />
            </form>
            <p className="comment">Comment#1</p>
            <p className="comment">
              Comment#2 Lemme tell you a story all about how my life got twist
              turnt upside down. Something seomthing something and my name is
              will smith and this is how I became to prince of bel-air
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Movies;

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
            <br/>
            <input type="submit" />

          </form>
          <div className="movie-info">
            <h3>This is what a single movie would look like</h3>
            <h3>/movies/:id</h3>
            <br/>
            <h3>Title</h3>
            <br />
            <h3>Genre</h3>

            <img className='movie-images'src=" https://i.pinimg.com/originals/da/06/5e/da065e13fc0f9d8ba57c8c05d9ee048c.jpg" alt='img placeholder'/>
            <h3> Average Ratings for each movie</h3>
            <form>
            <input type="radio" name="movieRating" value="1"/> 1
            <input type="radio" name="movieRating" value="2"/> 2
            <input type="radio" name="movieRating" value="3"/> 3
            <input type="radio" name="movieRating" value="4"/> 4
            <input type="radio" name="movieRating" value="5"/> 5
            <input type='submit'/>
            </form>
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
            <p className="comment">Comment#3</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Movies;

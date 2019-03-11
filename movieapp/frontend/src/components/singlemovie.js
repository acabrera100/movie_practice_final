import React, { Component } from "react";
import "../Css/Movies.css";
class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="movie-body">
        <div className="movie-info">
          <h3>Title</h3>
          <br/>
          <h3>Genre</h3>
          <br/>
          <h3> Average Ratings</h3>
          <br/>
          <form className='comments'>
          <input type="text"/>
          <input type='submit'/>
          </form>
        </div>
      </div>
    );
  }
}
export default SingleMovie;

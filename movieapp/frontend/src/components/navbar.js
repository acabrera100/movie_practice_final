import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <nav>
          <Link to="/Home" className="link-home">
            Home
          </Link>

          <Link to="/movies" className="link">
            AllMovies
          </Link>
          <Link to="/movies/byGenre" className="link">
            ByGenre
          </Link>
        </nav>
      </>
    );
  }
}

export default Navbar;

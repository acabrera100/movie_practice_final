import React from "react";
import "../Css/AllMovies.css";
import axios from "axios";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      inputSearchText: "",
      filteredmovies:[]
    };
  }

  componentDidMount() {
    // debugger
    axios.get("/movies").then(res => {
      return this.setState({
        movies: res.data.movies
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleSearchMovieByTitle = event => {
    event.preventDefault();

    const filteredMovies =(this.state.movies.filter(el=>{
      return(el.title.toLowerCase().includes(this.state.inputSearchText.toLowerCase()))
    })
    )
    this.setState({
    filteredmovies:filteredMovies
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="movie-body">
        <div className="movie-info">
          <form className="searchBar" onSubmit={this.handleSearchMovieByTitle}>
            <input
              placeholder="Search by Title"
              type="text"
              onChange={this.handleChange}
              name="inputSearchText"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default Movies;

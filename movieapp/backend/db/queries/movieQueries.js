const { db } = require("./index.js");

const getSingleMovie = (req, res, next) => {
  let movieName = req.params.id;
  db.one("SELECT title ,synopsis,release_date,comment,genre, img_url, AVG (STARS) FROM movies JOIN ratings ON movies.id = ratings.movie_id JOIN genres ON movies.genre_id = genres.id JOIN comments ON comments.movie_id = movies.id WHERE LOWER (movies.title) LIKE $1 GROUP BY title,synopsis,release_date,genre,img_url,comment", [movieName])
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "Retrieved a single movie",
        movies: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

const getAllMovies = (req, res, next) => {
  console.log("err");
  db.any(
    "SELECT title,img_url, AVG (STARS) FROM movies JOIN ratings ON movies.id = ratings.movie_id GROUP BY title,img_url"
  )
    .then(data => {
      res.json({
        status: "success",
        message: "Retrieved all movies",
        movies: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

const getAllMoviesbyGenre = (req, res, next) => {
  let genreName = req.params.id;
  db.any("SELECT title,img_url, AVG (STARS) FROM movies JOIN ratings ON movies.id = ratings.movie_id JOIN genres ON movies.genre_id = genres.id WHERE LOWER(genres.genre) LIKE $1 GROUP BY title,img_url", [genreName])
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "Retrieved a single movie",
        movies: data
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

module.exports = { getAllMovies, getSingleMovie,getAllMoviesbyGenre };

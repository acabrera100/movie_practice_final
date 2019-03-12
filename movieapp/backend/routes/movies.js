var express = require('express');
var router = express.Router();

const {getAllMovies,getSingleMovie,getAllMoviesbyGenre} = require("../db/queries/movieQueries.js")

router.get("/",getAllMovies);
router.get("/:id", getSingleMovie)
router.get("/genre/:id",getAllMoviesbyGenre)

module.exports = router;

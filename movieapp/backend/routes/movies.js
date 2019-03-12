var express = require('express');
var router = express.Router();

const {getAllMovies,getSingleMovie} = require("../db/queries/movieQueries.js")

router.get("/",getAllMovies);
router.get("/:id", getSingleMovie)

module.exports = router;

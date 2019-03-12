const {db} = require("./index.js")


const getSingleMovie = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one("SELECT * FROM movies WHERE id = $1", [postId])
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "Retrieved a single movie",
        movies: data
      });
    })
    .catch(err => {
      console.log(err)
      return next(err)})
};

const getAllMovies = (req,res,next) =>{
  db.any("SELECT * FROM movies")
  .then(data =>{

    res.json({
    status:"success",
    message:"Retrieved all movies",
    movies:data
  })
})
.catch(err => {
      console.log(err)
      return next(err)})
}



module.exports = {getAllMovies,getSingleMovie}

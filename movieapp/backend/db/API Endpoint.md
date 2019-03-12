API Endpoints
Largely, your API endpoints are up to you as a developer. However, based on a consideration of what we'll need on the frontend, a few potential needs become apparent. While we may be able to process some of this stuff on the frontend, we'll probably want API endpoints that:

Fetch all movies with an average of all the ratings for each movie.
Fetch all information and comments for a specific movie.
Fetch all the movies that have a certain genre.
Frontend Routes
You should have the following routes on your frontend:

/ - A homepage that reads: "Welcome to MovieApp" in an h1 tag.
Also renders a navigation bar across the top of the page, visible on every subsequent route.
Navbar should have the following links: "Home," "All Movies," "By Genre".


/movies - A page that fetches and renders all movies, including their image URLs and average ratings.
Includes a form tag containing a text input and a submit button. Label - "Search By Title."
When a user enters part or all of a movie's title (not case sensitive) and clicks "Search" (submit), the list of movies should be filtered to only the movies with titles that correspond to what the user was searching for.
Each movie should link to that movie's individual page (route described below).

-/movies/byGenre - A page that fetches and renders all movies, including their image URLs and average ratings. This time with a different search metric!
// -Includes a form tag containing a select input and a submit button. Label - "Search By Genre."
-The select input should contain all valid Genres as options. By default, the selected option should be blank, and this should render all movies.
(genres will be generated by the genres table in the database)

-When a user selects a genre and clicks submit, the list of movies should be filtered to only movies that have that genre.
-Each movie should link to that movie's individual page (route described below).

-/movies/:id - A page that renders all information for that individual movie, including average rating, title, and image. Below this information, all comments are listed.
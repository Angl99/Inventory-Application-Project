const { 
    addMovie,
    listAllMovies,
    updateMovieById,
    getMovieById,
    deleteMovieByName
  } = require("./src/movieStore");

function processInput() {
    const expectedCommand = process.argv[2];
    console.log(expectedCommand);

    let result = "Error"
}
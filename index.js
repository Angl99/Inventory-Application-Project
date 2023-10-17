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

    const item = {};

    switch (expectedCommand) {
        case "add":
            result = addMovie();
            console.log('New movie added: \n', result);
            break;
        case "list":
            result = listAllMovies();
            console.log('All movies: \n', result);
            break;
        case "update":
            result = updateMovieById(item.id);
            console.log('Movie updated: \n', result);
            break;
        case "get":
            result = getMovieById(item.id);
            console.log('Movie found: \n', result);
            break;
        case "delete":
            result = deleteMovieByName(item.name);
            console.log('Movie deleted: \n', result);
            break;
        default:
            `Error: Command not found`;
            break;
    }
}
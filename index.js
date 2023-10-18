const chalk = require("chalk");
const { 
    addMovie,
    listAllMovies,
    updateMovieById,
    getMovieById,
    deleteMovieById,
    saveMovies,
    saveCart
  } = require("./src/movieStore");


const expectedCommand = process.argv[2];

const item = {};

switch (expectedCommand) {
    case "create":
        result = addMovie();
        console.log('New movie added: \n', result);
        break;
    case "list":
        result = listAllMovies();
        console.log('All movies: \n', result);
        break;
    case "update":
        result = updateMovieById(item.id, item);
        console.log('Movie updated: \n', result);
        break;
    case "get":
        result = getMovieById(item.id);
        console.log('Movie found: \n', result);
        break;
    case "delete":
        result = deleteMovieById(item.id);
        console.log(`Movie with the given id was deleted`);
        console.log(`Current Movies: \n`, listAllMovies());
        break;
    default:
        console.log(`Error: Command not found`);
        break;
}

const chalk = require("chalk");
const { 
    addMovie,
    listAllMovies,
    updateMovieById,
    getMovieById,
    deleteMovieById,
    saveMovies,
    saveCart,
    listCartItems,
    addMovieToCart,
    cancelOrder,
    calcCartTotal
  } = require("./src/movieStore");


const expectedCommand = process.argv[2];

let red = chalk.red;
let green = chalk.green;
const id = process.argv[3];
const data = {
    name: process.argv[4],
    genre: process.argv[5],
    priceInCents: process.argv[6],
    inStock: process.argv[7],
}

let quantity = process.argv[4];

// const item = {}

switch (expectedCommand) {
    case "create":
        result = addMovie();
        console.log(green('New movie added: \n'), result);
        break;
    case "list":
        result = listAllMovies();
        console.log(green('All movies: \n'), result);
        break;
    case "update":
        result = updateMovieById(id, data);
        console.log(green('Movie updated: \n'), result);
        break;
    case "get":
        result = getMovieById(id);
        if (result !== undefined) {
            console.log(green('Movie found: \n'), result);
        } else {
            console.log(red(`Error: Please provide a valid id.`));
        }
        break;
    case "delete":
        result = deleteMovieById(id);
        console.log(red(`Movie with the id ${id} was deleted`));
        console.log(`Current Movies: \n`, listAllMovies());
        break;
    case "addcart":
        result = addMovieToCart(id, quantity);
        console.log(green('Movie added to cart: \n'), result);
        break;
    case "listcart":
        result = listCartItems();
        console.log(green('Cart items: \n'), result);
        break;
    case "cancel":
        result = cancelOrder();
        console.log(green('Order cancelled: \n'), result);
        break;
    case "calculate":
        result = calcCartTotal(id);
        console.log(green('Cart total: \n'), result);
        break;
    default:
        console.log(`Error: Command not found`);
        break;
}

/*
"addcart": "node index.js addcart",
"listcart": "node index.js listcart",
"cancelorder": "node index.js cancel",
"calctotal": "node index.js calculate"
*/
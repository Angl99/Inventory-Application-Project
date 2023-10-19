const fs = require("node:fs");
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const { writeFileSync } = require("node:fs");
const movies = require("../data/movies.json");
const chalk = require("chalk");
const cart = require("../data/cart.json");

let blue = chalk.blue;
let green = chalk.green;
function generateMovieNames() {
  const movieNames = [
    "Interstellar",
    "Blade Runner 1982",
    "Matrix Trilogy",
    "Ex Machina",
    "Train to busan",
    "V/H/S",
    "Come True",
    "Lord of the Rings Trilogy",
    "Her",
    "Eternal Sunshine of the Spotless Mind",
    "Terminator Trilogy",
    "2001: A Space Odyssey",
    "The Cabin in the Woods",
    "Alien",
    "The Mist",
    "Spider-Man 2",
    "Inception",
    "Drive",
    "There will be blood",
    "Nightmare on elm street",
    "Old boy",
    "I Saw the Devil",
    "Parasite",
    "The Dark Knight Trilogy",
    "Shutter Island",
  ];

  return movieNames[Math.floor(Math.random() * movieNames.length)];
}

function generateGenres() {
  const genres = ["Action", "Sci-fi", "Horror", "Psychological Thriller"];
  return genres[Math.floor(Math.random() * genres.length)];
}
faker.custom = {
  movieNames: generateMovieNames,
  genres: generateGenres,
};

function randomNum(min, max) {
  return (Math.random() * (max - min) + min).toFixed(0);
}

function saveMovies() {
  const stringifiedData = JSON.stringify(movies, null, 2);
  fs.writeFileSync("./data/movies.json", stringifiedData);
  console.log(blue("Data was saved to movies.json"));
}

function saveCart() {
  try {
    const stringifiedData = JSON.stringify(cart, null, 2);
    fs.writeFileSync("./data/cart.json", stringifiedData);
    console.log(blue("Data was saved to cart.json"));
  } catch (error) {
    console.error("Error saving cart data:", error);
  }
}

// Creating movie entry
function addMovie() {
  const newMovie = {
    id: `${nanoid(5)}`,
    name: faker.custom.movieNames(),
    genre: faker.custom.genres(),
    priceInCents: Math.floor(Math.random() * 10000),
    inStock: randomNum(0, 20),
  };

  movies.push(newMovie);
  saveMovies();
  return newMovie;
}

// Listing all movies
function listAllMovies() {
  return movies;
}

// get a movie by id
function getMovieById(id) {
  return movies.find((movie) => movie.id === id);
}

// Updating a movie
function updateMovieById(id, updatedMovie) {
  const currentMovie = getMovieById(id);
  if (currentMovie) {
    const index = movies.findIndex((movie) => movie.id === id);
    movies[index] = {
      ...currentMovie,
      ...updatedMovie,
    };
    saveMovies();
    return movies;
  }
  return `Error: Movie by id: ${id} was not found.`;
}

// Deleting a movie by name
function deleteMovieById(id) {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index) {
    movies.splice(index, 1);
    saveMovies();
    return movies;
  }
  return `Error: Movie by id: ${id} was not found.`;
}
// List all cart items
function listCartItems() {
  return cart;
}
// Add a movie to cart
function addMovieToCart(id, quantity) {
  const movie = getMovieById(id);
  if (movie) {
    const items = cart.find((item) => item.id === id);
    if (items) {
      items.quantity += quantity;
    } else {
      cart.push({
        id,
        quantity,
      });
    }
    saveCart();
    return cart;
  }
}

// Cancel an order
function cancelOrder() {
  cart.length = 0;
  saveCart();
  return cart;
}

// Calculate cart total
function calcCartTotal() {
  let total = 0;
  cart.forEach((item) => {
    const movie = getMovieById(item.id);
    total += movie.priceInCents * item.quantity;
  });
  let fixedTotal = (total / 100).toFixed(2);
  return green(`Your total is $${fixedTotal}.`);
}

module.exports = {
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
  calcCartTotal,
};

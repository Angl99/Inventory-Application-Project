const fs = require("fs");
const { nanoid } = require("nanoid");
const { faker } = require('@faker-js/faker');
const { writeFileSync } = require("node:fs");

/*
obj = {
    id: `${nanoid(5)}`,
    name: faker.custom.movieNames(),
    genre: faker.custom.genres(),
    priceInCents: Math.random() * 100000,
    inStock: true
}
*/


const movies = [];

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
        "Shutter Island"
      ];

      return movieNames[Math.floor(Math.random() * movieNames.length)];
}
faker.custom = {};
faker.custom.movieNames = generateMovieNames();

function generateGenres() {
    const genres = [
        "Action",
        "Sci-fi",
        "Horror",
        "Psychological Thriller"
    ];
    return genres[Math.floor(Math.random() * genres.length)];
}
faker.custom = {};
faker.custom.genres = generateGenres();



// Creating movie entry
function addMovie(data) {
    movies.push(data);
    return data;
}

function listAllMovies(params) {
    
}

function updateMovie(params) {
    
}

function getMovie(params) {
    
}

function deleteMovie(params) {
    
}

function saveMovies() {
    const stringifiedData = JSON.stringify(movies, null, 2);
    fs.writeFileSync("./data/movies.json", stringifiedData); 
}

addMovie({ id: `${nanoid(5)}`, name: faker.custom.movieNames(), genre: faker.custom.genres(), priceInCents: Math.random() * 10000, inStock: true})
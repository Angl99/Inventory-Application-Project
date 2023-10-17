const fs = require("node:fs");
const { nanoid } = require("nanoid");
const { faker } = require('@faker-js/faker');
const { writeFileSync } = require("node:fs");
const movies = require("./data/movies.json");

/*
obj = {
    id: `${nanoid(5)}`,
    name: faker.custom.movieNames(),
    genre: faker.custom.genres(),
    priceInCents: Math.random() * 100000,
    inStock: faker.datatype.boolean
    Math.floor(Math.random() * 10000
}
*/

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

function generateGenres() {
    const genres = [
        "Action",
        "Sci-fi",
        "Horror",
        "Psychological Thriller"
    ];
    return genres[Math.floor(Math.random() * genres.length)];
}
faker.custom = {
    movieNames: generateMovieNames,
    genres: generateGenres
};


// Creating movie entry
function addMovie(data) {
    movies.push(data);
    return data;
}

function listAllMovies() {
    return movies;
}

function updateMovieById(id) {
    
}

function getMovieById(id) {
    return movies.find(movie => movie.id === id);
}  

function deleteMovieByName(name) {
    const index = movies.findIndex(movie => movie.name === name);
    movies.splice(index, 1);
    console.log(`${name} was deleted`);
    return movies;
}

function saveMovies() {
    const stringifiedData = JSON.stringify(movies, null, 2);
    fs.writeFileSync("./data/movies.json", stringifiedData); 
    console.log('data was saved to movies.json');
}

console.log(addMovie({ id: `${nanoid(5)}`, name: faker.custom.movieNames(), genre: faker.custom.genres(), priceInCents: Math.floor(Math.random() * 10000), inStock: faker.datatype.boolean()}));
// saveMovies();
// console.log(listAllMovies());
// console.log(getMovieById("02DXB"));
// console.log(deleteMovieByName("The Cabin in the Woods"));
// console.log(listAllMovies());
// saveMovies();
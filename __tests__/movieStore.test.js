const getMovieById = require('../src/movieStore');
const movies = require('../data/movies.json');


describe('getMovieById', () => {
    it('should return the correct movie when a valid id is provided', () => {
      const id = 'c4Wex'; 
      const result = getMovieById(id);
      const expectedMovie = movies.find(movie => movie.id === id);
      expect(result).toEqual(expectedMovie);
    });
  
    it('should return undefined when an invalid id is provided', () => {
      const id = '4'; 
      const result = getMovieById(id);
      expect(result).toBeUndefined();
    });
  });
const fs = require('fs');
const Movie = require('../Models/movieModel');

const movies = JSON.parse(fs.readFileSync('./data/movies.json'));

exports.checkId = (req, res, next, value) => {
  console.log(`Movie id is ${value}`);

  const movie = movies.find(mov => mov.id === +value);
  if (!movie) {
    return res.status(404).json({
      status: 'fail',
      message: `Movie with ID ${value} is not found`,
    });
  }

  next();
};

exports.validateBody = (req, res, next) => {
  if (!req.body.name || !req.body.releaseYear) {
    return res.status(400).json({
      status: 'fail',
      message: 'Not a valid movie data',
    });
  }
  next();
};

// ROUTE HANDLER FUNCTION
exports.getAllMovies = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      movies,
    },
    count: movies.length,
  });
};

exports.getMovie = (req, res) => {
  const id = +req.params.id;

  const movie = movies.find(mov => mov.id === id);
  //   if (!movie) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: `Movie with ID ${id} is not found`,
  //     });
  //   }
  res.status(200).json({
    status: 'success',
    data: {
      movie,
    },
  });
};

exports.createMovie = (req, res) => {
  const newId = movies[movies.length - 1].id + 1;
  const newMovie = Object.assign({ id: newId }, req.body);

  movies.push(newMovie);
  fs.writeFile('./data/movies.json', JSON.stringify(movies), err => {
    res.status(201).json({
      status: 'success',
      data: {
        movie: newMovie,
      },
    });
  });
};

exports.updateMovie = (req, res) => {
  const id = +req.params.id;
  const movIndex = movies.findIndex(el => el.id === id);
  //   if (!movies[movIndex]) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: `Movie with ID ${id} is not found`,
  //     });
  //   }
  Object.assign(movies[movIndex], req.body);
  fs.writeFile('./data/movies.json', JSON.stringify(movies), err => {
    res.status(200).json({
      status: 'success',
      data: {
        movie: movies[movIndex],
      },
    });
  });
};

exports.deleteMovie = (req, res) => {
  const id = +req.params.id;
  const movIndex = movies.findIndex(el => el.id === id);
  //   if (!movies[movIndex]) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: `Movie with ID ${id} is not found`,
  //     });
  //   }
  movies.splice(movIndex, 1);
  fs.writeFile('./data/movies.json', JSON.stringify(movies), err => {
    res.status(204).json({
      status: 'success',
      data: {
        movie: null,
      },
    });
  });
};

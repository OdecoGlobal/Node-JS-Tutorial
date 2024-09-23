const Movie = require('../Models/movieModel');

// WORKING WITHH MONGODB

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      status: 'success',
      count: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getMovie = async (req, res) => {
  // const movie = await Movie.find({_id: req.params.id })

  try {
    const movie = await Movie.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        movie,
      },
    });
    // const docs = console.log(docs)
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      data: {
        movie: updatedMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

/* 
WORKING WITH JSON DATA

const fs = require('fs');
const movies = JSON.parse(fs.readFileSync('./data/movies.json'));
 CHECKING ID
exports.checkId = (req, res, next, value) => {
  console.log(`Movie id is ${value}`);

VALIDATING MOVIE JSON
  exports.validateBody = (req, res, next) => {
  if (!req.body.name || !req.body.releaseYear) {
    return res.status(400).json({
      status: 'fail',
      message: 'Not a valid movie data',
    });
  }
  next();
};

  const movie = movies.find(mov => mov.id === +value);
  if (!movie) {
    return res.status(404).json({
      status: 'fail',
      message: `Movie with ID ${value} is not found`,
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
*/

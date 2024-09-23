const mongoose = require('mongoose');

// Creating a schema
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
  },
  ratings: {
    type: Number,
  },
  totalRatings: {
    type: Number,
  },
  releaseYear: {
    type: Number,
    required: [true, 'Release year is required'],
  },

  releaseDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  genres: {
    type: [String],
    required: [true, 'Genres is required'],
  },
  directors: {
    type: [String],
    required: [true, 'Directors is required'],
  },
  coverImage: {
    type: String,
    require: [true, 'Cover Image is require'],
  },
  actors: {
    type: [String],
    required: [true, 'Actor is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
});

// Creatring a model
const Movie = mongoose.model('Movie', movieSchema);

// Exporting a model
module.exports = Movie;

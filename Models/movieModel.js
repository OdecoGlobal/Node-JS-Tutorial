const mongoose = require('mongoose');

// Creating a schema
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Duration is required'],
    unique: true,
  },
  description: String,
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
  },
  rating: {
    type: Number,
    default: 1.0,
  },
});

// Creatring a model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

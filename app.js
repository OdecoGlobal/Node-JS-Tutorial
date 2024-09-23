const express = require('express');
const morgan = require('morgan');

const moviesRouter = require('./routes/moviesRoutes');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//  USING THE ROUTES
app.use('/api/v1/movies', moviesRouter);

module.exports = app;

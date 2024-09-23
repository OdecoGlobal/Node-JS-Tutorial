const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// CREATING A SERVER
const app = require('./app');

mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then(conn => {
    // console.log(conn);
    console.log('DB connnection successful');
  })
  .catch(err => {
    console.error(`some error has occured :${err}`);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server has started');
});

/* 
// // Creating a document from a model
// const testMovie = new Movie({
//   name: 'Die Had',
//   description: 'Action packed movie',
//   duration: 130,
//   rating: 4.5,
// });

// // Inserting the document in a database
// testMovie
//   .save()
//   .then(doc => console.log(doc))
//   .catch(err => console.error(`Error occured ${err}`));
*/

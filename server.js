const express = require('express');
const routes = require('./routes');
const sequelize = require('sequelize');

// Import sequelize connection
const sequelize = require('./config/connection'); // Added this line of code

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => { // Added this line of code plus combined with original code below
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
});


// BELOW WAS PART OF ORIGINAL CODE 
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// Dependencies
const express = require('express');

// Asks the app to use Express.js and creates the variable port that the server runs on
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware that points to the public folder
app.use(express.static('public'));

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app listener, to start the server on the specified PORT
app.listen(PORT, () => {
    console.log('App listening at http://localhost:${PORT}')
});

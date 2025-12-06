const express = require('express');
const app = express(); // Create an instance of an Express application
const port = 5000;
const routes = require('./routes/index');
const path = require('path');// Import the path module

app.use('/', routes); // Use the imported routes for the root path

app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'hjs'); // Set up the view engine

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});// Start the server and listen on the specified port

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
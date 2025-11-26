const express = require ('express');
const app = express(); // Create an instance of an Express application
const port = 5000;

app.get('/', (req, res, next) => {res.send('My Fist Express App!')})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});// Start the server and listen on the specified port

app.get('/json', (req, res, next) => {
    let objetoTest = new Object();

    objetoTest.atributo1 = "teste1";
    objetoTest.atributo2 = "teste2";
    objetoTest.atributo3 = "teste3";

    res.json(objetoTest); 
}); // Define a route that responds with a JSON object

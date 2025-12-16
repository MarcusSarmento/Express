const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/', (req, res, next) => {
    const data = {
        name: 'Index',
        date : 'December 3,2025',
        profiles: [
            {name: 'Mike', city: 'New York', profession: 'Developer'},
            {name: 'Cindy', city: 'San Francisco'},
            {name: 'Joe', city: 'Chicago', profession: 'Designer'}
        ]}
    res.render('index', data);
    }
); // Define a route for the root path that renders the 'index' view with data


router.get('/json', (req, res, next) => {
    const data = {name: 'Marcus', location: 'Juiz de Fora'};
    res.json(data);
}); // Define a route that responds with a JSON object

router.get('/html', (req, res, next) => {
    const html = '<html><h1 style="color:red">This is a HTML response</h1></html>'
    res.send(html);
}); // Define a route that responds with an HTML string

router.get('/query', (req, res, next) => {
    const query = req.query;
    res.json(query);
}); // Define a route that responds with query parameters as JSON

router.get('/params/:name/:location/:ocupation', (req, res, next) => {
    const params = req.params;
    res.json({params : params});
}); // Define a route that responds with URL parameters as JSON

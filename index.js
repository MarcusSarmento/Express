const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const routes = require('./routes/index');

// 🔴 ESTÁTICOS PRIMEIRO
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// depois as rotas
app.use((req, res, next) => {
    console.log('FIRST MIDDLEWARE');
    req.timestamp = new Date().toString();
    next();
})
app.use('/', routes);

// views / engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

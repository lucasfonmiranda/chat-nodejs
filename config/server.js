//Import express
var express = require('express');

//Import consign
var consign = require('consign');

//Import Body-parser
var bodyParser = require('body-parser');

//Import express-validator
var expressValidator = require('express-validator');

//Init the object express
var app = express();

//Config the EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Config the middleware exoress.static
app.use(express.static('./app/public'));


//Config the middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Config the middleware express-validator
app.use(expressValidator());

//The autoload of routes, models and controllers
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//Export the object app
module.exports = app;
'use strict';

var express = require('express'),
    mongo = require('./mongo'),
    cors = require('cors'),
    requireDir = require('require-dir'),
    bodyParser = require('body-parser'),
    multer = require('multer');

mongo();

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use(cors());

var port = process.env.NODE_PORT || 3000;

var routes = requireDir(__dirname + '/routes', {recurse: true});
for(var route in routes) {
    routes[route](app);
}

//Error handling
app.use(function(err, req, res, next) {
    if (err) {
        console.log(err.stack);
    }
    res.sendStatus(500);
});

app.listen(port);

console.log('I\'ve started the web app!');

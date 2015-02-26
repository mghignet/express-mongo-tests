'use strict';

var mongoose = require('mongoose');

function mongo() {
    mongoose.connect('mongodb://mghignet:mghignet@ds063779.mongolab.com:63779/listedecourse');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () { console.log('Connected to the DB'); });
}

module.exports = mongo;

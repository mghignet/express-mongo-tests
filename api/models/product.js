'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
        name: { type: String, required: true },
        quantity: { type: Number, required: false, default: 1 }
    });

module.exports = mongoose.model('Product', productSchema);

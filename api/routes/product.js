'use strict';

var express = require('express');
var Product = require('../models/product');
var productController = require('../controllers/productController');

function productRoutes(app) {
    console.log('Initialize product router');
    var router = express.Router();
    app.use('/product', router);

    router.param('id', function(req, res, next, id) {
        next();
    });

    router.route('/')
    .get(productController.listProducts)
    .post(productController.createProduct);

    router.route('/:id')
    .get(productController.getProduct)
    .put(productController.modifyProduct)
    .delete(productController.deleteProduct);
    
}

module.exports = productRoutes;

'use strict';

var Product = require('../models/product');

module.exports = {
    
    listProducts: function(req, res, next) {
        console.log('Listing products');
        Product.find(function(err, products) {
            if (err) { return next(err); }
            if(!products) { res.sendStatus(404); }
            res.send({products: products});
        });
    },

    getProduct: function(req, res, next) {
        var id = req.params.id;
        console.log('getting the product with id: ' + id);
        Product.findOne({_id: id}, function(err, product) {
            if (err) { return next(err); }
            if(!product) { res.sendStatus(404); }
            res.send({product: product});
        });
    },

    modifyProduct: function(req, res, next) {
        var body = req.body,
            id = req.params.id;
        console.log('modifying the product with id: ' + id);
        Product.update({_id: id}, body, function(err, numberAffected, raw) {
            if (err) { return next(err); }
            if (numberAffected === 0) {
               res.sendStatus(404); 
            }
            else {
                res.sendStatus(200);
            }
        });
    },

    createProduct: function(req, res, next) {
        var body = req.body;
        console.log('Creating a product... ');
        Product.create(body, function(err, newProduct) {
            if(err) { return next(err); }
            res.status(201).send(newProduct);
        });
    },

    deleteProduct: function(req, res, next) {
        var id = req.params.id;
        console.log('Deleting product with id: ' + id);
        Product.remove({"_id": id}, function(err, numDeleted) {
            if(err) { return next(err); }
            if(numDeleted === 0) { res.sendStatus(404); }
            res.sendStatus(200);
        });
    }

};

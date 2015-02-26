angular.module('boucherieApp', ['ngRoute', 'boucherieServices', 'boucherieControllers'])

.config(function($routeProvider, $locationProvider){

    $routeProvider
        .when('/product', {
            templateUrl: 'app/components/product/productView.html',
            controller: 'ProductController'
        })

        .when('/product/:id', {
            templateUrl: 'app/components/product/productView.html',
            controller: 'ProductController'
        })

        .otherwise('/product');
    
})

;

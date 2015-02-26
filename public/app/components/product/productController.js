angular.module('boucherieControllers', ['ngRoute'])

.controller('ProductController',  ['$scope', 'ProductService', function($scope, ProductService) {
    console.log('Controlleur chargé');
    $scope.products = [];
    ProductService.getProducts().then(function(result) {
        $scope.products = result.data.products;
    });

    $scope.deleteProduct = function (product) {
        console.log('removing', product);
        var id = product._id;
        ProductService.deleteProduct(id).then(function(result) {
            _.remove($scope.products, product);
        });
    };
}])


;

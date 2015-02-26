angular.module('boucherieServices').service('ProductService', ['$q', '$http', function($q, $http) {
    this.getProducts = function() {
        
        return $http.get('http://localhost:3000/product');

    };

    this.deleteProduct = function(id) {
        return $http['delete']('http://localhost:3000/product/' + id);
    };

    console.log('Service chargé');
}]);

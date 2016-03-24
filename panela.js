(function(angular) {
	'use strict';

	var panela = angular.module('panelaModule', []);

	panela.controller('panelaController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

    $scope.products = [];
    $scope.institutes = [];
    $scope.page = 'home';

    $scope.getParameterByName = function(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

    $scope.selectedProductPrice = $scope.getParameterByName('price');

    $http.get('assets/data/products.json').then(function(response) {
			$scope.products = response.data;
		});

    $http.get('assets/data/institutes.json').then(function(response) {
			$scope.institutes = response.data;
		});

    $scope.goToCart = function(product) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      window.location = '#cart';
      $scope.page = 'cart';
      $scope.selectedProduct = product;
    };

    $scope.submitNewsletter = function() {
      alert('Obrigado por se cadastrar! Use o cupom FAZENDOADIFERENCA para ganhar o desconto de 15%.');
      $scope.email = '';
    };

  }]);
})(window.angular);

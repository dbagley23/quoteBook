var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, quoteService){
	$scope.searchQuote;
	$scope.searchCategory;
	$scope.quotes = quoteService.getData();
	$scope.addQuote = function(){
		var newQuote = {
			text: $scope.quoteField,
			author: $scope.authorField
		}
		quoteService.addData(newQuote)
	};
	$scope.deleteQuote = function(text){
		quoteService.removeData(text)
	};
	$scope.filterQuote = function(){
		var newQuote = {
			text: $scope.quoteField,
			author: $scope.authorField
		}
		quoteService.filterData(newQuote)
	};
	$scope.quoteField
	$scope.authorField
	$scope.test="this is a test";
});

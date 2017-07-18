angular.module("myApp").controller("control", function($scope, service){ 
    $scope.displayQuotes = service.quota();
    $scope.deleteQuote = service.deleteQuote;
    $scope.addQuote = function(a,b) {
            service.addQuote(a,b);
            $scope.quote = "";
            $scope.author = "";
    }
    

})
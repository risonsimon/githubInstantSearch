var app = angular.module('fkSearch',[]);

app.controller('searchCtrl',function($scope,$http){
    $scope.change = function () {
        console.log($scope.searchTerm)


        $http.get('https://api.github.com/search/repositories?q='+$scope.searchTerm+'&sort=stars&order=desc').
            success(function(data) {
                $scope.results = data.items;
                console.log($scope.results)
            });
    };
});

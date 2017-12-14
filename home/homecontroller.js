myApp.controller('HomeController', ["$scope", "$state","$http", "sampleFactory",

  function($scope, $state,$http, sampleFactory) {

    console.log('this is the homecontroller, hi!');

    $scope.userString = "default value";

    $scope.gotopage2 = function() {
      $state.go("page2");
    };

    $scope.data = {};
    $scope.data.json = {};


    $http.get('./data/donnees.json').then(function(json){
      $scope.data.json=json.data;
      console.log($scope.data.json);
    });




    $scope.getWeather = function() {
    $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/3bde361f09bd002c/geolookup/conditions/q/IA/Cedar_Rapids.json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log('get ok');
        $scope.weather = response.data;
        console.log($scope.weather)
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('get nok');
    });
  }

$scope.getWeather();

  }]);

(function () {
    'use strict';
    
    angular.module('lunch', [])
    .controller('lunchController', lunchController);
    
    lunchController.$inject = ['$scope'];
    function lunchController($scope) {
      $scope.name = "Yaakov";
      $scope.status="hungry";
      $scope.saymessage=function() {
        return "Hello Man";
      }
      $scope.click=function(){
        $scope.status="fed";
      };
    }
    
    })();
(function(){
  "use strict";

  angular.module("LunchCheck", [])

  .controller("checkMyLunch", checkMyLunch);

  checkMyLunch.$inject = ['$scope'];
  function checkMyLunch($scope){

    $scope.buttonIsClicked = function (){

      if($scope.value===undefined){
        $scope.output = "Empty";
      }

      else{
        var inputList = $scope.value.split(",");
        var numOfItems = inputList.length;

        if(numOfItems<=3){
          $scope.output = "Enjoy!";
        }
        else
          $scope.output = "Too much!";
      }

    };
  };

})();

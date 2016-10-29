'use strict';

(function () {

    function charController($scope) {
        $scope.start = function () {
            //Write your code here
            $scope.chooseChar = false;
            $scope.nextText = "Next";
            $scope.narrative = [
              "I hope you pick well!",
              "Welcome to the char selection"
            ];
            $scope.nextNarrative = $scope.narrative.pop();
        };

        $scope.storyClick = () => {
          $scope.nextNarrative = $scope.narrative.pop();

          if ($scope.narrative.length < 1) {
            $scope.nextText = "Back to beginning";
          } else {
            $scope.nextText = "Next";
          }

          if($scope.narrative.length < 1) {
            $scope.chooseChar = true;
            $scope.narrative = [
							"I hope you pick well!",
              "Welcome to the char selection"
            ];
          }
        }

        $scope.start();

    }

    app.controller('charController', ['$scope', charController]);

})();

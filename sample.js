/**
 * Created by namita on 24/10/14.
 */
function firstCntrl($scope) {
    $scope.data = {message : "hello"}
    $scope.name = "ABC";
    $scope.y = [1,2,3,4,5,6,7];
    console.log(122)
    $scope.onClick = function() {
        alert("Click Called");
    };
}

function secondCntrl($scope) {
    console.log(2)
    $scope.onClick = function() {
        alert("Click Called");
    };
}
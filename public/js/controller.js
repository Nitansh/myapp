function customerController($scope, $http) {
    $http.get('/data/Rating_Plan.json').success(
        function (data) {
            $scope.data = data;
            $scope.trans = window.polyglot;
            $('#GeneralInformation').removeClass('Loading');
        }
    );

}


function ratinPlanCtrl($scope, $http) {
    $http.get('/data/general-information.json').success(
        function (data) {
            $scope.data = data;
            $scope.trans = window.polyglot;
            $('#RatingPlan').removeClass('Loading');
        }
    );
}

function loginController($scope, $http) {
    $http.get('/data/body.json').success(
        function (data) {
            $scope.data = data;
            $scope.trans = window.polyglot;
            $('#RatingPlan').removeClass('Loading');
        }
    );
}
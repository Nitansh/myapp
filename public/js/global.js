 function findBootstrapEnvironment() {
                var envs = ['xs', 'sm', 'md', 'lg'];

                $el = $('<div>');
                $el.appendTo($('body'));

                for (var i = envs.length - 1; i >= 0; i--) {
                    var env = envs[i];

                    $el.addClass('hidden-'+env);
                    if ($el.is(':hidden')) {
                        $el.remove();
                        return env
                    }
             };
            }

            function collapse(){
                var mode = findBootstrapEnvironment();
                if (mode == 'xs'){
                    $('.navbar-toggle').click();
                }
            }

            var _locale="";
            if(navigator.language==="en-US"){
                _locale = 'en';
            }
            else if(navigator.language==="de"){
                _locale= 'de';
            }
                    
                    $.getJSON('/locales/' + _locale + '.json', function(data) {
                        window.polyglot = new Polyglot({phrases: data});
                    })
                    
            $('#Body').removeClass('Loading');


var newrozApp = angular.module('mycomponent', [])

.controller('FooterController',['$scope','$http',function($scope, $http) {
 $http.get('/data/footer.json').success(
        function (data) {
            console.log(data);
            $scope.data = data;
            $scope.trans = window.polyglot;
        }
    
    );
}
])


.controller('HelloController',['$scope','$http',function($scope, $http) {
 $http.get('/data/header.json').success(
        function (data) {
            console.log(data);
            $scope.data = data;
            $scope.trans = window.polyglot;
        }
    
    );
    $scope.collapseNavbar=window.collapse;
    $scope.rlconversion = function ($event) {
        var _id = $event.currentTarget.id;
        if (_id == "RTL") {
            var angular_link = $("link[rel=stylesheet]")
            $(angular_link[0]).attr({
                href: "/css/bootstrap.rtl.css"
            });
        } else if (_id == "LTR") {
            var angular_link = $("link[rel=stylesheet]")
            $(angular_link[0]).attr({
                href: "/css/bootstrap.min.css"
            });
        }
        window.collapse();
    }

    $scope.englishConversion = function ($event) {
        _locale = 'en';
        $.getJSON('/locales/' + 'en' + '.json', function (data) {
            window.polyglot = new Polyglot({
                phrases: data
            });
        })
        window.collapse();
    }
    $scope.frenchConversion = function ($event) {
        _locale = 'de';
        $.getJSON('/locales/' + 'de' + '.json', function (data) {
            window.polyglot = new Polyglot({
                phrases: data
            });
        })
    }
    window.collapse();
}
])
  
  .directive('headernav', function() {	
    return {
      restrict: 'E',
      templateUrl:'/template/headernav.html',
    };
  })


   .directive('footernav', function() { 
    return {
      restrict: 'E',
      templateUrl:'/template/footernav.html',
    };
  })

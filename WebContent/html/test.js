/**
 * 2017-07-17
 */

/*模块测试一：定义应用、控制器、自定义命令*/
 var app = angular.module('myApp', []).controller('myCtrl1',function($scope){
    $scope.description="测试控制器1";
}).directive("polarisHt",function(){ 
	return {
		restrict : "E",
		template:"<h1>polarisHt自定义</h1>"
		+ "<h6>polarisHt自定义</h6>"
	};
});
//自定义过滤器
app.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.split(",").reverse().join(" ");
    }
});

/*模块测试二*/
angular.module('app2', []).controller('myCtrl2',function($scope, $rootScope){
	 $scope.names = ["Emil", "Tobias", "Linus"];
	 $rootScope.description="测试控制器2";
});
angular.bootstrap(document.getElementById("A2"), ['app2']);

/*模块测试三*/
angular.module('app3', []).controller('myCtrl3',function($scope, $location, $http, $interval){
	 $scope.myUrl = $location.absUrl();
	 $interval(function(){
		 $scope.time = new Date().toLocaleTimeString();
	 },1000);
	 $http.get($scope.myUrl+"getAngular").then(function (response) {
		 console.log(response.data);
	      $scope.myWelcome = response.data.data;
	  });
	 
	 $scope.sites = {
			    site01 : "Google",
			    site02 : "Runoob",
			    site03 : "Taobao"
			};
});
angular.bootstrap(document.getElementById("A3"), ['app3']);

/*模块测试四*/
//定义一个模块
var app4 = angular.module("app4", []);
app4.value("defaultInput", 5);  //定义一个常量，向控制器传递值
// 创建 factory "MathService" 用于两数的乘积 provides a method multiply to return multiplication of two numbers
app4.factory('MathService', function() {
   var factory = {};
   factory.multiply = function(a, b) {
      return a * b
   }
   return factory;
}); 

// 在 service 中注入 factory "MathService"
app4.service('CalcService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   }
});
app4.controller('CalcController', function($scope, CalcService, defaultInput) {
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function() {
       $scope.result = CalcService.square($scope.number);
    }
 });
angular.bootstrap(document.getElementById("A4"), ['app4']);


/*模块测试五*/
angular.module('app5',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{template:'这是首页页面'})
    .when('/computers',{template:'这是电脑分类页面'})
    .otherwise({redirectTo:'/'});
}]);
angular.bootstrap(document.getElementById("A5"), ['app5']);

/*模块测试六*/



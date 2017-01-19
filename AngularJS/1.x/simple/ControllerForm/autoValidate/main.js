var app = angular.module("minmax", [
	'jcs-autoValidate',
	'angular-ladda'
]);

app.run(function(defaultErrorMessageResolver) {
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
		errorMessages['tooYoung'] = 'You must be atleast {0} years old to use this site';
		errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
		errorMessages['badUsername'] = 'Username can only contain letters and characters';
	});
});

app.controller("MinMaxCtrl", function ($scope, $http) {
	$scope.formModel = {};
	$scope.submitting = false;

	$scope.onSubmit = function () {
		$scope.submitting = true;
		console.log("I am submitted !");
			console.log($scope.formModel);

			$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
				success(function(data) {
					console.log(":)");
					$scope.submitting = false;
				}).error(function(data) {
					console.log(":(");
					$scope.submitting = false;
				});
	};
});
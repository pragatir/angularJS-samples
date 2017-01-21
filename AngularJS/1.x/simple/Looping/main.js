var app = angular.module("codecraft", []);

app.controller("PersonsController", function ($scope) {
	$scope.persons = [
	{
		"name" : "Gregory Huffman",
		"email" : "gregory@gmail.com",
		"birthdate" : "2015-12-23T18:00:37-07:00",
		"phonenumber" : "9274827382",
		"address" : "5880 Sed, Street",
		"city" : "Denderbelle",
		"country" : "Europe"
	}, {
		"name" : "Joe Tribiany",
		"email" : "joe@gmail.com",
		"birthdate" : "2015-08-02T18:00:37-07:00",
		"phonenumber" : "9274827382",
		"address" : "5880 Sed, Street",
		"city" : "Denderbelle",
		"country" : "Europe"
	}, {
		"name" : "Edward Cullen",
		"email" : "edward@gmail.com",
		"birthdate" : "2015-05-15T18:00:37-07:00",
		"phonenumber" : "9274827382",
		"address" : "5880 Sed, Street",
		"city" : "Denderbelle",
		"country" : "Europe"
	}, {	
		"name" : "Tony Stark",
		"email" : "tony@gmail.com",
		"birthdate" : "2015-09-19T18:00:37-07:00",
		"phonenumber" : "9274827382",
		"address" : "5880 Sed, Street",
		"city" : "Denderbelle",
		"country" : "Europe"
	}];
});
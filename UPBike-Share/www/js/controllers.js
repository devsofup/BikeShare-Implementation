/*
<!--

UP Bike Share - Android App

This is a course requirement for CS 192 Software Engineering II under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the Department of Computer Science, College of Engineering, University of the Philippines, Diliman for the AY 2015-2016.

Team S+: Steven Barrozo, Mark Anton Mamac, Jaypee Renz San Gabriel

Screencast: https://youtu.be/Xg039MQwh8g

The MIT License (MIT)

Copyright (c) 2015 upbikeshareandroid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-->

<!--

Code History:

May 12, 2016 - Jaypee San Gabriel
->Base controllers for log-in page and home page

--> */
angular.module('BikeShare.controllers', ['BikeShare.services'])

    .controller('LoginCtrl', function ($scope, DatabaseService) {
		$scope.users=[];
		
		function getusers() {
			DatabaseService.readall(users)
			.then(function(result){
				$scope.users=data;
			});
        }
    })

    .controller('HomeCtrl', function ($scope, BikeDataService) {
		$scope.bikes=[];
		
		function getbikesbystation(stationName) {
			BikeDataService.readbystation(stationName)
			.then(function(result){
				$scope.bikes=data;
			});
        }
	});


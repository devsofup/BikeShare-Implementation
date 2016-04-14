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

April 14, 2016 - Jaypee San Gabriel
->Added Backand Dependency + Configurations
->Added general Database Service

--> */
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','backand'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


/*
Database Service
April 14, 2016
This service is for obtaining data from the Backand database.
The code is obtained from: <no author>. Backand Documentation. Last accessed: April 14, 2016 
*/
.service('DatabaseService', function($http, Backand){    

     var baseUrl = '/1/objects/';

     return {

          // read all rows in the object
          readAll: function(objectName) {  
          return $http({
               method: 'GET',
               url: Backand.getApiUrl() + baseUrl + objectName
          }).then(
               function(response) {
                    return response.data.data;
               });
          },

          // read one row with given id
          readOne: function(objectName, id) {
          return $http({
               method: 'GET',
               url: Backand.getApiUrl() + baseUrl + self.objectName 
               + '/' + id
          }).then(
               function(response) {
               return response.data;
               });
          }
     };
});
	

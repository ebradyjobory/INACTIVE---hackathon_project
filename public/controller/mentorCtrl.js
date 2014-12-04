angular.module('app', [])

.controller("MentorCtrl", function ($scope) {

  console.log('mentorCtrl called');

  $scope.information = "infooooooo";
  
  var student1 = {
    name: "Essam",
    subject: "Angular"
  };
  var student2 = {
    name: "Victor",
    subject: "D3"
  };
  var student3 = {
    name: "Vissam",
    subject: "Backbone"
  };

  var students = [student1, student2, student3];

  $scope.students = students;

  console.log(students[0]);
});
$(function(){

  var mentor = {};

  mentor.init = function(){

  }
  //dummy data
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
  var showStudentsClicked = false;
  $('#showStudents').on('click', function(e){
    if (!showStudentsClicked) {
      e.preventDefault();
      for (var key in students) {
        console.log(students[key].name);
        $('table').find('tbody').append('<tr>').append('<td>'+students[key].name+'</td>')
        $('table').find('tbody').append('<td>'+students[key].subject+'</td>')
        showStudentsClicked = true;
      }
    }

  });
  var reputationCount = [];
  var clickedUp = false;
  var counter = 0
  $('#up').on('click', function(e){
    if (!clickedUp) {
      e.preventDefault();
      clickedUp = true;
      reputationCount.push('whohoo');
      counter++;
      $('#reputation').html(counter);
    }
  });
   var clickedDown = false;
   $('#down').on('click', function(e){
    if (!clickedDown) {
      e.preventDefault();
      clickedDown = true;
      if (counter--) {
        reputationCount.pop('whohoo');
        $('#reputation').html(counter);
      }
    }
  });
});

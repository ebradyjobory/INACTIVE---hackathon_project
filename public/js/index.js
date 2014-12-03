var app = {};

app.init = function(){
  this.students = [];
};

app.fetch = function(username){
  $.ajax({
    url: 'https://api.github.com/users/' + username,
    type: 'GET',
    contentType: 'application/json',
    success: function(data){
      app.students.push(data);
      app.addStudent();
    },
    error: function(data){
      console.error('something went wrong');
    },
  });
};

app.addStudent = function(){
  var student = app.students[0];

  console.log(student);

  var name = '<p>'+student.name+'</p>';
  var email = '<p>'+student.email+'</p>';
  var blog = '<p>'+student.blog+'</p>';
  var location = '<p>'+student.location+'</p>';
  var url = '<p>'+student.url+'</p>';

  var followers = '<p>'+student.followers+'</p>';
  var following = '<p>'+student.following+'</p>';
  var publicRepos = '<p>'+student.public_repos+'</p>';

  var image = '<img src=' + student.avatar_url +'>';

  $('#studentImage').append(image);
  $('#studentInfo').append(name + email + blog + location + url);
  $('#studentMetrics').append(followers + following + publicRepos);
};

$(document).ready(function(){
  app.init();

  $('.search').on('click', function(e){
    e.preventDefault();

    var $username = $('#username').val();

    app.fetch($username);
  });
});

var app = {};

app.init = function(){
  this.server = 'https://api.github.com/users/essamjoubori';
  this.fetch();
  this.students = [];
};

app.fetch = function(){
  $.ajax({
    url: 'https://api.github.com/users/essamjoubori',
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

  var name = '<p>'+student.name+'</p>';
  var email = '<p>'+student.email+'</p>';
  var blog = '<p>'+student.blog+'</p>';
  var location = '<p>'+student.location+'</p>';
  var url = '<p>'+student.url+'</p>';
  var followers = '<p>'+student.followers+'</p>';
  var following = '<p>'+student.following+'</p>';
  var publicRepos = '<p>'+student.public_repos+'</p>';

  $('#studentInfo').append(name + email + blog + location + url);
  $('#studentMetrics').append(followers + following + publicRepos);
};

$(document).ready(function(){
  app.init();
});

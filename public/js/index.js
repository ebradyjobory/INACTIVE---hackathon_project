var app = {};

app.init = function(){
  this.server = 'https://api.github.com/users/essamjoubori';
  this.fetch();
};

app.fetch = function(){
  $.ajax({
    url: 'https://api.github.com/users/essamjoubori',
    type: 'GET',
    contentType: 'application/json',
    success: function(data){
      console.log(data);
    },
    error: function(data){
      console.error('something went wrong');
    },
  });
};

$(document).ready(function(){
  app.init();
});

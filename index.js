//libs
var express = require('express');
var app     = express();
var path    = require('path');

app.set('port',3000);
app.use(express.static('public'));

//define routes
app.get('/',function(req,res){

  res.sendFile(path.join(__dirname + '/public/pages/index.html'));
});


//spin up server
var server = app.listen(app.get('port'),function(){

  var port = server.address().port;
  console.log('Listening on port ' + port);
});



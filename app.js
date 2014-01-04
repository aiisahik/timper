var express = require('express');
var logfmt = require("logfmt");
var http = require('http');
var path = require('path');
var redis = require('redis');
var db = redis.createClient();

var app = express();

app.use(logfmt.requestLogger());
app.set('port', process.env.PORT || 3000);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/redis', function(req, res){
	console.log("wtf");
	// db.zadd('online', Date.now(), "hey", "what");
	res.send('Hello World');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
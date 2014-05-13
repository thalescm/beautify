// web.js
var express = require("express");
var path = require('path');

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set("view options", {layout: false});

app.use(express.static(path.join(__dirname, 'public')));

// ###################### //

/* GET index page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Beautify' });
});

app.get('/home', function(req, res) {
  res.render('home', { title: 'Agendar' });
});

app.get('/salao', function(req, res) {
  res.render('salao-escolhido', { title: 'Salao' });
});


var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});
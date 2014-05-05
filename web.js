// web.js
var express = require("express");
var router = express.Router();
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set("view options", {layout: false});

app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Beautify' });
});

app.use('/', router);

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});
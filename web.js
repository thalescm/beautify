// web.js
var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Beautify' });
});

app.use('/', router);

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});
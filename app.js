'use strict';

var express = require('express'), app = express();
// app.set('views','views');
app.get('/', function(req, res) {
  // res.render('home', {});
  res.send('Done');
});
app.listen(8080);
module.exports.getApp = app

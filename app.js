'use strict';
var express = require('express'), app = express();
app.get('/', function(req, res) {
  res.send('Done');
});
app.listen(8080);
module.exports.getApp = app

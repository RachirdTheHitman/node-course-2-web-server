const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    error: 'Page not found.'
  });
});

app.listen(3000);
module.exports.app = app;

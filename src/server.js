import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import FeedBack from './feedback';

var app = express();
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { react_stuff: renderToString(React.createElement(FeedBack, null)) });
});

app.listen(8811, function () {
  console.log('Example app listening on port 8811!');
});
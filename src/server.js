import express from 'express';

var app = express();
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(8811, function () {
  console.log('Example app listening on port 8811!');
});
var express = require('express')
var app = express()
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// app.use(logger('dev'));

// API code - you can check back on this in the future!! :) - checkout server/routes/index.js too :) 
// require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));
const port = 3001

var user = require('./src/User.js');

// var mysql = require('mysql');
// var session = require('express-session');
// var path = require('path');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('login'));

app.post('/', (req,res) => {
  var response = user.login(req.body.username, req.body.password)
  if (response === true) {
  res.redirect('homepage');
  } else {
    res.redirect('/');
  };
});

app.get('/signup', (req, res) => res.render('signup'));

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.get('/homepage', (req, res) => res.render('homepage'));

app.get('/addspace', (req, res) => res.render('addspace'));

app.post('/addspace', (req, res) => {
  console.log(req.body);
  res.redirect('homepage');
});

app.get('/space', (req, res) => res.render('space'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

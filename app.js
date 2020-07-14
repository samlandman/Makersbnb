const express = require('express')
const app = express()
const port = 3001

var user = require('./src/User.js');

// var mysql = require('mysql');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('login'));

app.post('/', (req,res) => {
  console.log(user)
  console.log(user.password)
  var response = user.login('test','test123')
  console.log(response)
  console.log(req.username);
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

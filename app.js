var express = require('express')
var app = express()
var cookieSession = require('cookie-session')
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// app.use(logger('dev'));

// API code - you can check back on this in the future!! :) - checkout server/routes/index.js too :) 
// require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));
const port = 3000

var user = require('./src/User.js');
var spaces = require('./src/spaces.js');
var user1 = require('./src/user_2.js');
// var mysql = require('mysql');
// var path = require('path');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieSession({
  name: 'session',
  keys: ['Arav', 'Dhara']
}));
app.use('/public', express.static('public'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('login'));

app.post('/', (req,res) => {
  var response = user.login(req.body.username, req.body.password)
  if (response === true) { 
    req.session.username = req.body.username;
    res.redirect('homepage');
  } 
  else {
    res.redirect('/');
  };
});

app.get('/signup', (req, res) => res.render('signup'));

app.post('/signup', (req, res) => {
  user1.add_user(req.body.username, req.body.email, req.body.password)
  res.redirect('/');
});

app.get('/homepage', async (req, res) => {
  res.locals.spaces = await spaces.list();
  res.render('homepage');
});

app.get('/addspace', (req, res) => res.render('addspace'));
 
app.post('/addspace', (req, res) => {
  spaces.add(req.body.title, req.body.description, req.body.image, req.body.location, req.body.pricePerNight, req.session.username)
  res.redirect('homepage');
});

app.get('/space', (req, res) => res.render('space'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

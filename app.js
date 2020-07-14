const express = require('express')
const app = express()
const port = 3000
const logger = require('morgan');
const bodyParser = require('body-parser');
app.use(logger('dev'));

// require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('login'));

app.get('/homepage', (req, res) => res.render('homepage'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

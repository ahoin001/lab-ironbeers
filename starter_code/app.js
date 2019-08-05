
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();


app.set('view engine', 'hbs');

// directories we will use views from 
app.set('views', __dirname + '/views');

// directory we will use static files from (images,css)
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/Home', (req, res, next) => {
  res.render('home');
});



app.listen(3000);

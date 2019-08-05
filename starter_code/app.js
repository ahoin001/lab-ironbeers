//TODO  Questions
// 1. Npm init to use npm ?
// 2. npm install will install everything in dependancies?



const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();


app.set('view engine', 'hbs');

// directories we will use views from 
app.set('views', __dirname + '/views');

// directory we will use static files from (images,css)
app.use(express.static(path.join(__dirname, 'public')));


// when user requests these in search bar, return these hbs files
app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/Home', (req, res, next) => {
  res.render('home');
});

app.get('/beers', (req, res, next) => {

  // method from api that returns array of 25 beers
  punkAPI.getBeers()
    .then(beers => {

    })
    .catch(error => {
      console.log(error)
    })

  // renders hbs file we choose, and passes in data from api we gathered for use    
  res.render('beers');
});

app.get('/randombeers', (req, res, next) => {
  res.render('randombeers');
});


// port we are using to host site, use nodemon or node to view 
app.listen(3000);

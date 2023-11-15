var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const token = process.env.TMDB_API_KEY

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};



router.get('/movies', (req,res) => {
    fetch(url, options).then(response => response.json())
    .then(data => {
        res.json({movies: data.results})
    });
})


module.exports = router;

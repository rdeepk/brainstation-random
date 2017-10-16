const express = require('express');
const rp = require('request-promise');
const apiKey = "hidden";
const nasaApiUrl = "https://api.nasa.gov/planetary/apod?api_key="+apiKey;
const app = express();
const port = process.argv[2] || 8080;

app.set('view engine', 'ejs');

app.listen(port);
app.get('/home', function(req, res){
    rp.get(nasaApiUrl)
            .then(function(response){
                let results = JSON.parse(response);
                res.render('home', results);
            })
            .catch(function(error){
                console.log(error);
            })

})
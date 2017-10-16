const express = require('express'),
        app = express(),
        port = process.argv[2] || 8080;

app.set('view engine', 'ejs'); //means set view engine as ejs. It only allows single quotes.


app.listen(port, function(){
    console.log(`Server is running on port: ${port}`);
});

app.get('/home', function(req, res){
    let ejsData = {
        user : {
            heading: req.query.heading,
            username: req.query.username
        },
        max : req.query.max
    }
    res.render('home', ejsData);
});
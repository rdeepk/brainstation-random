const express = require('express'),
        app = express(),
        port = process.argv[2] || 8080;

app.listen(port, function(){
    console.log(`Server is running on port: ${port}`);
});

app.get('/home', function(req, res){
    let heading = req.query.heading;
    let username = req.query.username;
    let response = `<h1>${heading}</h1>`;
    response +=  `<h1>${username}</h1>`;
    res.send(response);
});
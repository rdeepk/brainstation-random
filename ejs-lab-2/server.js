const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

app.set("view engine", "ejs");
app.listen(port);

app.get("/brainstation/:city/:user", function(req, res){
    let data = {
        user: req.params.user,
        city: req.params.city,
        course: req.query.course
    }
    res.render('users', data);
})
const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

app.set("view engine", "ejs");
app.listen(port);

app.get("/users", function(req, res){
    ageFilter = req.query.age;
let users = [
    { name:'bob', gender: 'boy', age : 10},
    { name:'jane', gender: 'girl', age : 15},
    { name:'peter', gender: 'boy', age : 9},
    { name:'sara', gender: 'girl', age : 6}];
//let data = { users : users };

    res.render('users', { users : users, filter: ageFilter});
})
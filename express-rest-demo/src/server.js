const express = require('express'),
        app = express(),
        port = process.argv[2] || 8080,
        router = express.Router(),
        bodyParser = require('body-parser');

//import routes
const seattle = require('./routes/bs-seattle');
const van = require('./routes/bs-van');
const tor = require('./routes/bs-tor')

app.use("/seattle", seattle);
app.use("/tor", tor);
app.use("/van", van);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);

let students = [
    'Kyle',
    'Marco',
    'Simon',
    'Tuan',
    'Kenneth'
]

app.get("/students", function(req, res){
    res.json(students);
})

app.post('/students', function(req, res) {
    students.push(req.body.newStudent);
    res.json(students)
})

app.put('/students', function(req, res) {
    let student = req.body.student;
    let newName = req.body.newName;

    let index = students.indexOf(student);
    students[index] = newName;

    res.json(students);
})

app.delete('/students/:studentName', function(req, res) {
    let index = students.indexOf(req.params.studentName);

    students.splice(index, 1);
    res.json(students);
})
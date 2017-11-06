const express = require('express'),
        app = express(),
        port = process.argv[2] || 8080;
const bodyParser = require('body-parser');

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

    let index = students.indexOf(student)
    students[index] = newName;

    res.json(students);
})

app.delete('/students/:studentName', function(req, res) {
    let index = students.indexOf(req.params.studentName)

    students.splice(index, 1);
    res.json(students);
})
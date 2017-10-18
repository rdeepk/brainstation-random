const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(port);
app.get('/game', function(req, res){
    res.render('game', {});
})
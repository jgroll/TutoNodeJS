var express = require('express');
var bodyParser = require('body-parser');
var session = require('cookie-session');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(session({secret: 'todo'}))

app.get('/todo', function(req, res) {
    var task = ['Arroser les plantes', 'Aller chercher du pain', 'Passer chez le garagiste'];
    res.render('todo.ejs', {task : task});
});
app.post('/ajouter', function(req, res) {
    var tache = req.body.tache;
    //console.log(tache);
});

app.listen(8080, function(){
    console.log("Started on PORT 8080");
});
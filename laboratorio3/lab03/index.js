var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.end('hola mundoen Express :)');
});

app.post('/', function(req,res){
    res.end('llamando POST misma url');
});

app.put('/user', function(req,res){
    res.end('recibimos un PUT en /user');
});

app.delete('/user', function(req,res){
    res.end('Recibimos un DELETE en /user');
});

app.use('/static',express.static('public'));

app.use(function(req,res,next){
    res.status(404).send("Eso no existe!");
});

app.use(function(req,res,next){
    console.log(err.stack);
    res.status(404).send("Eso no existe!");
});

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000');
});
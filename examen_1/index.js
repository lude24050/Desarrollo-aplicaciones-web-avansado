var express = require('express')
var app = express()
var fs = require('fs');

var inicio = fs.readFileSync('vistas/inicio.html');
var galeria = fs.readFileSync('vistas/galeria.html');

app.get('/',function(req, res){
    res.write(inicio);
  res.end();
})

app.post('/',function(req, res){
    res.send('Ingresaste a nuestra galeria ')
})

app.get('/galeria',function(req, res){
    res.write(galeria);
  res.end();
})

app.post('/galeria',function(req, res){
    res.send('Realizando peticion ')
})

app.put('/user',function(req, res){
    res.send('recibimos put en /user')
})

app.delete('/user',function(req, res){
    res.send('recibimos delete en /user')
})

app.listen(3000, function(){
    console.log('aplicacion de ejemplo en el puerto 3000')
});
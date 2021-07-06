//importando o modulo express
var express = require('express');

//criação de constante que recebe o expresss
const app = express();

//construindo a rota
app.get("/", function(req, res){
    res.send('<h1>Olá seja bem vindo!<br>Rota principal</h1>');
})
// montando uma segunda rota 
app.get("/hello", function(req, res){
    res.send('<h1>Rota hello!</h1>');
})

//essa função tem de ser sempre a ultima de seu codigo pois ela quem abre o websever
app.listen(8080, function(){
    console.log('webserver rodando através do express!');
});
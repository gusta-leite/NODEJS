const express = require('express')
var app = express()//Instância express
var porta = '3200' //Variavel com o numero da porta usada pelo app 

//Recebe uma requisição do tipo get
app.get('/', function (req, res){
    res.send('Olá Mundo!')
})

//Coloca o servidor em execução para estutar e responder requisições
app.listen(porta, function(){ 
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})
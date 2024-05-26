//prompt-sync - modulo que recebe entradas de console de modo assíncrono
let prompt = require('prompt-sync')
prompt = prompt({sigint:true})
console.log('Olá Mundo!\r\n')
// var e let são argumentos para declarar variáveis
let nome = prompt('Qual é seu nome? ') //prompt.toString()
console.log(`Olá ${nome}!\r\n`)
console.log('Olá node!')
//require faz a importação de um módulo
const readline = require('readline')

//readline é um módulo com a funcionalidade de receber entradas no console
const rl = readline.createInterface /*isso aqui é um parametro*/({
    input:process.stdin,
    output:process.stdout
    //
})
rl.question('Qual o seu nome?\n', (nome)=>{
    console.log(`olá ${nome}`)
})
console.log('olá node!')
/* na execução, o código executa TUDO que consegue de uma vez */
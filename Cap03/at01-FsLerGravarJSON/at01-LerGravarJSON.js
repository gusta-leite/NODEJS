//Importação do módulo
const rwJSON = require('./fsJSON')
//Dados para gravar
let arquivo = './dados/alunos.json'
let obj = {
    nome: 'Pedro',
    nota1:10,
    nota2:9,
    nota3:8,
    nota4:9.5
}

//Leitura e carga
var json = rwJSON.lerJSON(arquivo)
console.log(json)

//Conversão de um objeto
var dados = rwJSON.converterJSON_Obj(json)
console.log(dados)

//Inserção
dados.push(obj)
console.log(obj)

//Conversão do obj para json
json = rwJSON.converterObj_JSON(dados)
console.log(json)

//Regravação
rwJSON.salvarJSON(json, arquivo)

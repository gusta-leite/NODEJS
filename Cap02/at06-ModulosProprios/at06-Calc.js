function soma(a, b){
    return parseInt(a)+parseInt(b)
}
function sub(a, b){
    return parseInt(a)-parseInt(b)
}
function mult(a, b){
    return parseInt(a)*parseInt(b)
}
function div(a, b){
    if (parseInt(b)>0){
        return parseInt(a)/parseInt(b)
    }     /* quanto tem um return ele volta pro main, por isso que 
    não precisa de um else aqui na linha de baixo*/
    return "Não é possível fazer divisão por zero"
}
console.log(soma(8,15))
console.log(sub(30,15))
console.log(mult(8,6))
console.log(div(100,4))
console.log(div(100,0))

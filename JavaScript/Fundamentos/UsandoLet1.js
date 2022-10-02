// Sempre vai preocurar no escopo menor, escopo global, espoco de funcao, escopo de blocos
let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)
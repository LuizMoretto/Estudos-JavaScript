// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => { // => substitui a palavra function
    return a+ b
}

console.log(soma(2, 3))

//Retorno implícito

const subtracao = (a, b) => a - b //Conceito arrow function, usa a função com a sigla => depois já usa o retorno com o a - b o programa já reconhece
console.log(subtracao (2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

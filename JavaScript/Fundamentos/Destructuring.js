// Nome recurso do Es2015

const pessoa = {
    Nome: 'Ana',
    idade: 5,
    endereco: {
        lagradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) 

const { endereco: { lagradouro, numero, cep} } = pessoa
console.log(lagradouro, numero, cep)

//const { conta: { ag, num } } = pessoa
//console.log(conta, ag)
let valor // não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
//Atribuição para um valor que vc quer anular.
    //console.log(valor.toString()) // erro! tentar comentar algo que está nulo

const produto = {}
console.log(produto.perco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined  // Evite atribuir undefined
console.log(!!produto.preco)
// Delete produto.preco para retirar uma variavel
console.log(produto)

produto.preco = null //Ex. sem preço
console.log(!!produto.preco)
console.log(produto)
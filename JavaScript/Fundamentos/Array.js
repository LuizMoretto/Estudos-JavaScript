const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
// ao setar a const valores com um valor ele adiciona na casa que queremos
// no caso a baixo vou inserido no array 10 o valor 10, sendo que a casa só tem 4 definidos assim a lingugagem definiu que há 6 elementos invalidos após o 4

valores[10] = 10
console.log(valores)
console.log(valores.length) //comando para falar quantos elementos há no array

valores.push({id: 3}, false, null, 'Teste') //usado para excluir o vaor selecionado 
console.log(valores)

console.log(valores.pop()) // usado para excluir o ultimo array
delete valores[0] // Exclui os itens com indice 0, ou que foi setado no cochetes
console.log(valores)

console.log(typeof valores) //Para ver o tipo da variavel
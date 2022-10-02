const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed(x) utilizado para colocar casas decimais nos programas
console.log(media.toString(2))  // toString(x) Valor flutuante em um ponto binário 
console.log(typeof media)
console.log(typeof Number)  //Number maiusculo função

console.log(7 / 0) // Infinity
console.log("10" / 2) // ainda assim divide
console.log("show!" * 2) // NAN Not a number
console.log(0.1 + 0.7) // i3é não da 0.8 por precisão 
//console.log(10.toString())
console.log((10.345).toFixed(2))

const raio = 5.6
const area = Math.PI *  Math.pow(raio, 2)

console.log(area.toFixed(2))
console.log(typeof Math)
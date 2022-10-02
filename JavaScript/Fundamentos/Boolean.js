//Modelos de negação para booleans
//JS recebe varios modelos de negação
//uma delas é com a ! que seria uma afirmação e !! como uma negação

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
//===============================================
isAtivo = 1
console.log(!!isAtivo)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
//================================================
console.log('Os falsos ....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
//================================================
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
//================================================
let nome = '' //Com aspas vazias ele seleciona o desconhecido
              //Se atribuir um nome ele vai ler no console.log o nome
              
console.log(nome || 'Desconhecido')
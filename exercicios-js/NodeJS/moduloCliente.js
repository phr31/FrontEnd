//modulo que efetuara o acesso dos seguintes modulos:
// "modulo.js" e "moduloA.js"

const moduloA = require('./modulo')
const moduloB = require('./moduloA')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

console.log(moduloA)
console.log(moduloB)
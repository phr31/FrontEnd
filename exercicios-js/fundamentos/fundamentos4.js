function getRandowNumber(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getRandowNumber(-1, 10)
    console.log('Opção escolhida foi: ' + option)   
} while (option != -1) 

console.log('Até a proxima!');
//EXERCICIO 1
function cumprimentar(name){
    console.log('Ola,' , name , '!')
}

cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"

//EXERCICIO 2

function converterIdadeEmAnosParaDias(idade) {
    return idade * 365
}

console.log(converterIdadeEmAnosParaDias(25))// retornará 9125
console.log(converterIdadeEmAnosParaDias(70)) // retornará 25550

//EXERCICIO 3

function calcularSalario(horas, salarioPerHora){
    return "Salário igual a R$" + (horas * salarioPerHora)
} 
console.log(calcularSalario(150, 40.5))// retornará "Salário igual a R$ 6075"

//EXERCICIO 4

function nomeDoMes(mes) {
    switch (mes) {
        case 1: return 'janeiro'
        case 2: return'fevereiro'
        case 3: return 'março'
        case 4: return 'abril'
    }
    
}
console.log(nomeDoMes(1))// retornará "janeiro"
console.log(nomeDoMes(4))// retornará "abril"

//EXERCICIO 5

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo){
        return false
    }
    return primeiro >= segundo
}
console.log(maiorOuIgual(0, 0))// retornará true
console.log(maiorOuIgual(0, "0") )// retornará false
console.log(maiorOuIgual(5, 1)) // retornará false

//EXERCICIO 7

function repeticao(numero, repete) {
    let repetir = []
    for (i = 0; i < repete; i++ ) {
        repetir.push(numero)
    }
    return repetir
}

console.log(repeticao("código", 2))// retornará ["código", "código"]
console.log(repeticao(7, 3))// retornará [7, 7, 7]

// EXERCICIO 8

function simboloMais(texto) {
    const mais = "+"
    return mais.repeat(texto) 
}

console.log(simboloMais(2))// retornará "++"
console.log(simboloMais(4))// retornará "++++"

// EXERCICIO 9

function receberPrimeiroEUltimoElemento(elemento) {
    primeiroElemento = elemento.shift()
    ultimoElemento = elemento.pop()
    return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))// retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))// retornará [-100, 16]

// EXERCICIO 10


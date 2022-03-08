let counter = 1

while (counter <= 10) {
    console.log('Contador = ', counter);
    counter++
}

for (let i = 0; i <= 10; i++) {
    console.log('i = ', i)
}

/*
const nota = [10, 9, 8, 7, 6, 5]
for (let i = 0; i < nota.length; i++) {
    console.log('Notas: ', nota[i]);
}
*/
/*
Number.prototype.between = function(start, end) {
    return this >= start && this <= end
}

const nota = [10, 9, 8, 7, 6, 5]
for (let i = 0; i < nota.length; i++) {
    if (nota[i].between(7,10)) {
        console.log('Notas:', nota[i], 'Aprovado!');
    } 
    else if (nota[i].between(0,7)) {
        console.log('Notas:', nota[i], 'Reprovado!');
    }
    else {
        console.log('Valor Invalido');
    }   
}
*/
const nota = [10, 9, 8, 7, 6, 5]
for (i in nota){
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}

for(let atributo in pessoa){
    console.log(atributo, ' = ', pessoa[atributo])
}
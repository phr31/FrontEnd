/*
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(indice + 1,'.', nome)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => 
    console.log(fabricante))
*/

const notas = [7, 8, 6, 10, 5, 8, 9]

//sem callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }    
}
console.log(notasBaixas);

//com callback
notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas);

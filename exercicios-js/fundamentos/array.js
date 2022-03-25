//fundamentos
const pilotos = ['Vito', 'Afonso', 'Raijin', 'Massa']
pilotos.pop()//The pop() method removes the last element from an array.
             //This method changes the length of the array.
console.log(pilotos)

pilotos.push('Alberto')//The push() method adds one or more elements to the end of an array 
                       //and returns the new length of the array
console.log(pilotos)

pilotos.shift()//The shift() method removes the first element from an array
               //This method changes the length of the array.
console.log(pilotos)

pilotos.unshift('Hamilton')//The unshift() method adds one or more elements to the beginning of an array 
                           //and returns the new length of the array.
console.log(pilotos)

pilotos.splice(2, 0, 'Botas', 'Massa')//The splice() method changes the contents of an array
                                      // by removing or replacing existing elements and/or adding new elements in place.
                                      //formula: .splice('inicio', 'termos a serem deletados apos a incerção dos elementos', elementos)
console.log(pilotos)

//foreach
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(indice + 1, 'º ',nome)
})
/* outros metodos
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
*/

// .map
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// .filter
const produtos = [
    {nome: 'Notebook', price: 2499, fragil: true},
    {nome: 'iPad Pro', price: 4199, fragil: true},
    {nome: 'Copo de Vidro', price: 12.49, fragil: true},
    {nome: 'Copo de Plastico', price: 18.99, fragil: true}
]

const caro = produtos => produtos.price >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro))

// .reduce
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
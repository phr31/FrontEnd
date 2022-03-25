//closure é o escopo criado quando uma função e declarada
//Esse escopo perante a função acessar e manipular variaveis externas à função
/*
const x = 'Global'

function fora() {
    //O Mesmo retorna a variavel mais proxima dentro do escopo
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());

// ---factory---
function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))


//---classe vs factory---
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log('Meu nome é', this.nome)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log('Meu nome é', nome)
    }
}
const p2 = criarPessoa('João')
p2.falar()

// ---IIFE - Imediately Invoked Function Expression---
(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})
()
*/

function getPreco(imposto = 0, moeda = 'R$') {
    return moeda + this.preco * (1 - this.desc) * (1 + imposto)
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))
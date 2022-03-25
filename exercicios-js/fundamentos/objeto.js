// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)

console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Paulo', 1399.99, 3)
console.log(f1, f1.getSalario())
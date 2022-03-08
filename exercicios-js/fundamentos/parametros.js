function soma(soma) {
    for (i in arguments) {
        soma = arguments[i]
    }
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

//parametro padrão

/*
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
*/

function soma1(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma1());
console.log(soma1(1,2));
console.log(soma1(1,2,3));

// -- this -- sempre será associado ao contexto em q foi inscrito

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Pessoal() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoal

function Pessoal() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoal
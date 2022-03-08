Number.prototype.between = function(start, end) {
    return this >= start && this <= end
}

const resultados = function (nota) {
    if (nota.between(7,10)) {
        console.log('Aprovado!');
    } 
    else if (nota.between(0,7)) {
        console.log('Reprovado!');
    }
    else {
        console.log('Valor Invalido');
    }
}
resultados(7);
resultados(6);
resultados(6.5);
resultados(7.5);
resultados(10);
resultados(11);
resultados(-1);

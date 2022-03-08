function resultados(nota) {
    if (10 >= nota && nota >= 7) {
        console.log('Aprovado!');
    } 
    else if (7 > nota && nota >= 0) {
        console.log('Reprovado!');
    }
    else {
        console.log('Valor Invalido');
    }
}
resultados(7);
resultados(6);
resultados(10);
resultados(11);
resultados(-1);



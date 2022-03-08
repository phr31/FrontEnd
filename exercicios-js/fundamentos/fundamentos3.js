const resultados = function (nota){
    switch (Math.floor(nota)) {
        case 10: case 9: case 8: case 7:
            console.log('Aprovado!');
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado!');
            break;
        default: console.log('Valor Invalido');
            break;
    }
}

resultados(7);
resultados(6);
resultados(6.5);
resultados(7.5);
resultados(10);
resultados(11);
resultados(-1);
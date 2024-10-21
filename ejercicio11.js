'use strict';

let numeros = [];

for(let i = 0; i < 10; i++){
    numeros[i] = Number(prompt("Introduce un numero para almacenarlo en el vector"));
}

let valoresNegativosYPositivos = () => {
    let contadorNegativos = 0;
    let contadorPositivos = 0;

    for(let j = 0; j < numeros.length; j++){
        if(numeros[j] < 0){
            contadorNegativos++;
        }else{
            contadorPositivos++;
        }
    }
};

let multiplo15 = () => {
    let contadorMultiplo15 = 0;
    for(let k = 0; k < numeros.length; k++){
        if(numeros[k] % 15 == 0){
            contadorMultiplo15++;
        }
    }
    return contadorMultiplo15;
};

let valorAcumulado = () => {
    let valorAcum = 0;
    for(let x = 0; x < numeros.length; x++){
        if(numeros[x] % 2 == 0){
            valorAcum += numeros[x];
        }
    }
    return valorAcum;
};



console.log("Los múltiplos de 15 son " + multiplo15());
console.log("El valor acumulado de los numeros pares es de " + valorAcumulado());


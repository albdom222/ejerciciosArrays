'use strict';

function pares(){
    let contadorPar = 0;
    let contadorImpar = 0;
    
    for(let i = 0; i < 5; i++){
        let numero = Number(prompt("Introduce un numero para saber si es par o impar"));
        if(numero % 2 == 0){
            contadorPar++;
        }else{
            contadorImpar++;
        }
    }
    console.log("El total de numeros pares ha sido de " + contadorPar + " y el de impares " + contadorImpar);
}


pares();
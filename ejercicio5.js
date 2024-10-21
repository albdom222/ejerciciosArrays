'use strict';

const vector = [];

// Creando el vector de 8 elementos
let i = 0;
while (i < 8){
    let numero = parseFloat(prompt("Ingrese numeros para completar el vector de 8 elementos"));
    vector.push(numero);
    i++;
}

// Funcion para calcular el valor acumulado de todos los elementos del vector
function valorAcumulado (){
    let suma = 0;
    for(let i = 0; i < vector.length; i++){
        suma += vector[i];
    }
    alert("La suma del valor acumulado es " + suma);
}

// Funcion para calcular el valor acumulado de todos los elementos del vector mayores que 36
let valorAcumulado36  = () => {
    let suma = 0;
    for(let i = 0; i < vector.length; i++){
        if(vector[i] > 36){
            suma += vector[i];
        }
    }
    alert("La suma del valor acumulado de los numeros mayores de 36 es " + suma);
};


// Funcion para calcular la cantidad de valores mayores a 50 que hay en el vector.
let contador50  = () => {
    let contadorMayores50 = 0;
    for(let i = 0; i < vector.length; i++){
        if(vector[i] > 50){
           contadorMayores50++;
        }
    }
    alert("Tenemos un total de " + contadorMayores50 + " números mayores de 50");
};


valorAcumulado();
valorAcumulado36();
contador50();
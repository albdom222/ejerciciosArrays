'use strict';

function promedioAltura(){

    let arrayAltura = [5];
    let suma = 0;
    for(let i = 0; i < 5; i++){ 
        arrayAltura[i] = parseFloat(prompt("Introduce la altura "));
        suma += arrayAltura[i];
    }
    alert("El promedio  de la altura es " + suma/5);
    //console.log("El promedio de las alturas es " + suma/5);
}

promedioAltura();
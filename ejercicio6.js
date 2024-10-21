'use strict';

function almacenarSueldos() {
    const vectorSueldos = [];
    
    for (let i = 0; i < 5; i++) {
        let sueldo;
        
        do {
            sueldo = Number(prompt("Introduce el sueldo (debe estar entre 100 y 500)"));
        } while (isNaN(sueldo) || sueldo < 100 || sueldo > 500);
        
        vectorSueldos.push(sueldo);
    }
    
    return vectorSueldos;
}

let recuento = vector => {
    let contadorRango = 0;
    let contadorAfortunado = 0;
    console.log("Sueldos almacenados " + vector);
    for(let i = 0; i < 5; i++){
        if (vector[i] >= 100 && vector[i] <= 300){
            contadorRango++;
        } else{
            contadorAfortunado++;
        }
    }
    console.log("Los que están en el rango son " + contadorRango + " y los afortunados " + contadorAfortunado);
};

let gastoEmpresa = vector => {
    let suma = 0;
    for(let i = 0; i < 5; i++){
        suma += vector[i];
    }
    console.log("El gasto total de la empresa es " + suma);
};

let sueldos = almacenarSueldos();
recuento(sueldos);
gastoEmpresa(sueldos);
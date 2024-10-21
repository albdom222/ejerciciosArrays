'use strict';

let estTurM = [5];
let estTurT = [6];
let estTurN = [11];
let sumaEdadesM = 0;
let sumaEdadesT = 0;
let sumaEdadesN = 0;

function ingresarDatos(){
    
    for(let i = 0;i < 5;i++){
        estTurM.push(Number(prompt("Introduce la edad para los alumnos del turno de mañana")));
        sumaEdadesM += estTurM[i];
    }

    for(let j = 0;j < 6;j++){
        estTurT.push(Number(prompt("Introduce la edad para los alumnos del turno de tarde")));
        sumaEdadesT += estTurT[j];
    }

    for(let k = 0;k < 11;k++){
        estTurN.push(Number(prompt("Introduce la edad para los alumnos del turno de noche")));
        sumaEdadesN += estTurN[k];
    }

}

function promedioTurnos(){
    console.log("El promedio de las edades del turno de mañana es : " + (sumaEdadesM/5));
    
    console.log("El promedio de las edades del turno de tarde es : " + (sumaEdadesT/6));
    
    console.log("El promedio de las edades del turno de noche es : " + (sumaEdadesN/11));

    let promedioM = sumaEdadesM/5;
    let promedioT = sumaEdadesT/6;
    let promedioN = sumaEdadesM/11;

    if((promedioM > promedioT) && (promedioM > promedioN)){
        console.log("El turno de mañana tiene el promedio de edad más alto");
    }else if((promedioT > promedioM) && (promedioT > promedioN)){
        console.log("El turno de tarde tiene el promedio de edad más alto");
    }else{
        console.log("El turno de noche es el que tiene el promedio más alto");
    }

}


ingresarDatos();
promedioTurnos();


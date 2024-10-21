'use strict';

let notasMayores7 = () => {
    
    let notas = [10];
    let contadorMayores = 0;
    let contadorMenores = 0;

    for(let i = 0; i < 10; i++){
        notas[i] = Number(prompt("Introduce una nota..."));
        if(notas[i] >= 7){
            contadorMayores++;
        }else{
            contadorMenores++;
        }
    }
    console.log("Hay " + contadorMayores + " mayores o iguales que 7 y " + contadorMenores + " menores que 7");  
};

notasMayores7();


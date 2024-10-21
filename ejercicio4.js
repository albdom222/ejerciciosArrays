'use strict';


const numeros1 = [];
const numeros2 = [];
let numeros3 = [];
const totalNumeros = 5;

// Ciclo para pedir 10 números al usuario
alert("Creando el primer vector");
for (let i = 0; i < totalNumeros; i++) {
  const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  numeros1.push(numero);
}

alert("Creando el segundo vector");
for (let i = 0; i < totalNumeros; i++) {
    const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    numeros2.push(numero);
}


alert("Sumando todos los componentes posicion a posicion");
for(let i = 0; i < totalNumeros; i++){
    numeros3.push(numeros1[i] + numeros2[i]);
    console.log(numeros3[i]);
}


  
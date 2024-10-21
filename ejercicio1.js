'use strict';

const numeros = [];
const totalNumeros = 10;

// Introducimos 10 valores
for (let i = 0; i < totalNumeros; i++) {
  const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  numeros.push(numero);
}

let suma = 0;
for (let i = numeros.length-1; i >= 5; i--){
  suma += numeros[i];
}

console.log(suma);

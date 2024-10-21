'use strict';

let personas = [];

function ingresarDatos(){
    while(true){

        let dni = prompt("Introduce el número de documento");
        let nombre = prompt("Introduce el nombre");
        let edad = Number(prompt("Introduce el edad"));
        let sexo = prompt("Introduce el sexo");

        if(dni == "0"){
            break;
        }

        personas.push({
            dni : dni,
            nombre : nombre,
            edad : edad,
            sexo : sexo
        });

    }
}

function cantidadTotalPersonasCensadas(){
    return personas.length;
}

function cantidadVaronesYMujeres(){
    let contadorVaron = 0;
    let contadorMujer = 0;
    let contadorOtro = 0;
    personas.forEach(persona => {
        if(persona.sexo == "M"){
            contadorVaron++;
        }else if(persona.sexo == "F"){
            contadorMujer++;
        }else{
            contadorOtro++;
        }
    });

    let vectorResultado = [contadorVaron, contadorMujer, contadorOtro];
    return vectorResultado;
}

function cantidadVaronRango(){
    let contadorVaron = 0;
    personas.forEach(persona => {
        if(persona.sexo == "M"){
            if(persona.edad >= 16 && persona.edad <= 65){
                contadorVaron++;
            }
        }
    });
    return contadorVaron;
}

ingresarDatos();
alert("La cantidad de personas censadas es de " + cantidadTotalPersonasCensadas());
alert("El numero de varones en el rango de 16 y 65 es de " + cantidadVaronRango());

let vectorAux = cantidadVaronesYMujeres();
console.log("El numero de varones es de " + vectorAux[0] + ", el número de mujeres es de " + vectorAux[1] + 
    " y el de personas que no son ni hombres ni mujeres es de " + vectorAux[2]);


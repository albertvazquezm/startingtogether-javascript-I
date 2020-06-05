/**
 * Hay 8 tipos de datos en JavaScript
 *
 * - PRIMITIVOS
 *
 * - string: cadenas de texto
 * - number: numeros hasta ±2^53 (Sólo si vamos a operar con ellos)
 * - boolean: for true/false.
 *
 * - null: "sin valor"
 * - undefined: "sin asignar"
 *
 * - bigint: numeros de cualquier longitud
 * - symbol: valor único e inmutable
 *
 * - OBJETO
 *
 * - object: for more complex data structures.
 *
 */

/**
 * string / number y boolean
 */

 const str = `hola que tal!`;
 const num = 123;
 const isItTrue = true;


/**
 * null / undefined
 */

let myOtherName;

console.log(myOtherName);

 let myName = `Albert`;
 myName = null;

/*
    Tipos complejos (objeto y arr)
 */


 const appConfig = {
     port: '8080',
     isDev: true,
     'apiUrl--2': `url`,
     metadata: {
         a: 'a',
         b: 'b'
     }
 }

const notas = [{},{},[1,2]];


/**
 * (Casi) todo en JavaScript es un objeto. Por qué!
 */

const myName2 = `Albert`;
const age = 49;

console.log(age.toFixed(2));

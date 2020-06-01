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
 * Tipos primitivos
 */

let url = `google.es`;
const age = 20;
const isEnabled = false;

/**
 * null / undefined
 */

let user = null;

/*
    Tipos complejos (objeto)
 */

const connectionDetails = {
    url: `www.google.es`,
    port: 80,
    isConned: false,
    metadata: {
        a: 'a',
        b: 'b'
    }
}

const myArr = ['hola', 'adios', 20, [0,1,3]];


/**
 * Acceder y mutar propiedades de los objetos
 */


/**
 * (Casi) todo en JavaScript es un objeto. Por qué!
 */
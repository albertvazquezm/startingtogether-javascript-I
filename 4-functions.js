/**
 * Las funciones agrupan código. Un programa es un conjunto de funciones que se llaman una a otras.
 * Las funciones reciben parámetros y retornan un valor
 */

/**
 * Function expressions (pre-es6)
 */

function myFunction() {
}

/**
* Arrow functions (es6+)
* - Elección de un buen nombre
*/

const sum = (a, b) => {
    console.log(a + b);
}

sum(10, 15);

/**
 * Parámetros y return
 * - Variables como parámetros (primitivos, objetos, funciones...)
 * - Callbacks
 * - Ejemplo retornar objeto
 */

const getConfig = () => {
    return {
        a: 'a',
        b: 'b',
    }
}

console.log(getConfig().a.length)

/**
 * Las funciones agrupan código. Un programa es un conjunto de funciones que se llaman una a otras.
 * Las funciones reciben parámetros y retornan un valor
 */

/**
 * Function expressions (pre-es6)
 */

function run() {

}

/**
* Arrow functions (es6+)
* - Elección de un buen nombre
*/

const generateTokenWithMethodJoeHopkins = () => {
    console.log()
}

/**
 * Parámetros y return
 * - Variables como parámetros (primitivos, funciones...)
 * - Callbacks
 * - Ejemplo retornar objeto
 */

const sum = (valueA, valueB) => {
    return valueA + valueB
}

const sumResult = sum(10, 5);
const sumResult2 = sum(sumResult, 5);

console.log(sumResult2);

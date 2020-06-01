/**
 * Para qué se usan las variables
 */

/**
 * Cómo se definen (var, let y const)
 * - caracteres prohibidos
 * - buenas prácticas (descriptivas, camelCase, CONSTANT)
 */

const myDataPoint = `my.api.com`;
let num = 1;
const url = `google.es`;

/**
 * var vs let y const
 * - peculiaridades var: hoisting, scope
 */

if (true) {
    var a = 'hola';
}
console.log(a);

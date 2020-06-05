/**
 * Operadores lógicos
 * - para qué se usan (tomar caminos distintos)
 */

/**
 * Una condición
 * - Operadores de comparación (== === > < >= <=)
 * - Conversión de tipos (if('url') {})
 */

const myPass = `1234`;
const inputPass = 1234;

''
0
null
undefined

if(myPass) {
    console.log('yeaah!');
} else {
    console.log(`err!`)
}


/**
 * Múltiples condiciones
 * - ||
 * - &&
 */

const isEnabled = false;

if(myPass || isEnabled || true || 0 || ) {
    console.log('yeaah!');
} else {
    console.log(`err!`)
}

/**
 * Switch
 */

const name = `dani`;

switch (name) {
    case `manuel`: console.log('manu!');
    case `dani`: console.log('dani!'); break;
    case `paula`: console.log('paula!'); break;
}
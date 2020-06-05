/**
 * Los loops nos permiten hacer tareas repetitivas
 * - tipos de loops (for, while, do while)
 * - for (más común)
 * - alternativas modernas (estilo funcional) (forEach, map, reduce)
 */

/**
* Declaración arrays
*/

const notas = [1, 4, 3, 5, 3, 1];

for (let i = 0; i < notas.length; i++) {
    notas[i] = notas[i] * 2;
}

console.log(notas);

/**
 * Bucles forEach, map, reduce
 */

notas.forEach((val, idx, arr) => {

})

const notasSobre10 = notas.map((val, idx, arr) => {
    val = val * 2;
    return `hola!`;
});

console.log(notasSobre10);



/**
 * Los loops nos permiten hacer tareas repetitivas
 * - tipos de loops (for, while, do while)
 * - for (más común)
 * - alternativas modernas (estilo funcional) (forEach, map, reduce)
 */

const notas = [2, 3, 5, 5, 1, 4, 1, 3.5];
const notasSobre10 = [];

/**
 * Bucle for
 */

for (let i = 0; i < notas.length; i++) {
    notasSobre10[i] = notas[i] * 2;
}

/**
 * Bucles forEach, map, reduce
 */

const nuevoArr = notas.map((valor) => {
    return `hola`;
});

console.log(nuevoArr);





/**
 * Radar barcos
 * ~~~~~~~####~~~~
 * ~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~
 */

// 1 - Datos del radar (tamaño)

const RADAR_SIZE = 15;
const SEA_CHARACTER = '🌊';
const BOAT_CHARACTER = '⛵';

const boats = [];

const printRadar = () => {
    for (let x = 0; x < RADAR_SIZE; x++) {
        const line = [];
        for (let y = 0; y < RADAR_SIZE; y++) {
            boats.find((boat) => {
                if(boat.x === )
            })
            if() {

            } else {

            }  
            line.push(SEA_CHARACTER);
        }
        console.log(line.join(``));
    }
}

const addBoat = (boat) => {
    boats.push()
}

addBoat({name: 'Florentina I', coords: [[5,5][]]});

printRadar();
import { Bacon } from "./AdicionalBacon";
import { Carne } from "./MontaSanduicheDeCarne";
import { Frango } from "./MontaSanduicheDeFrango";
import { Pepperoni } from "./AdicionalPepperone";
import { MussarelaRalada } from "./AdicionalMussarelaRalada";
import { Sanduiche } from "./Sanduiche";

console.log(`
Monte seu sanduiche:
Carne: R$ 5,50
Frango assado: R$ 4,50

Incremente sua experiência com delícias opcionais;
->bacon + R$ 0,99
->pepperone + R$ 0,99
->queijo mussarela ralado + R$ 2,00

Sugestões da Casa:
`);

const sanduiche = new Sanduiche();

// sanduíche de carne com bacon e queijo
const deCarneBaconQueijo = new MussarelaRalada(new Bacon(new Carne(sanduiche)));
console.log(`${deCarneBaconQueijo.getNome()} por apenas R$ ${deCarneBaconQueijo.getPreco()}`);

// sanduíche de frango com pepperoni e queijo
const deFrangoPepperoniQueijo = new MussarelaRalada(new Pepperoni(new Frango(sanduiche)));
console.log(`${deFrangoPepperoniQueijo.getNome()} por apenas R$ ${deFrangoPepperoniQueijo.getPreco()}`);

console.log()
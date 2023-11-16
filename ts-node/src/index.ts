import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');
// (Pokemon.prototype as any).customName = 'Picachu';
charmander.savePokemosToDB(3)
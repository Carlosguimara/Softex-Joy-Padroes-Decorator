import { MontaSanduiche } from "./MontaSanduiche";

export class Bacon extends MontaSanduiche {
    getNome(): string {
        return this.sanduiche.getNome() + ', bacon';
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 0.99;
    }
}
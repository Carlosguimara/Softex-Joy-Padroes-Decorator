import { MontaSanduiche } from "./MontaSanduiche";

export class Pepperoni extends MontaSanduiche {
    getNome(): string {
        return this.sanduiche.getNome() + ', pepperoni';
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 0.99;
    }
}
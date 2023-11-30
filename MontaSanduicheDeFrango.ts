import { MontaSanduiche } from "./MontaSanduiche"

export class Frango extends MontaSanduiche {

    getNome(): string {
        return this.sanduiche.getNome() + ' de Frango Assado'
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 4.5;
    }
}
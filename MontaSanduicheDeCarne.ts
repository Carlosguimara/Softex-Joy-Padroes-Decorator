import { MontaSanduiche } from "./MontaSanduiche"

export class Carne extends MontaSanduiche {

    getNome(): string {
        return this.sanduiche.getNome() + ' de Carne'
    }

    getPreco(): number {
        return this.sanduiche.getPreco() + 5.5;
    }

}
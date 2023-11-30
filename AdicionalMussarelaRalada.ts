import { MontaSanduiche } from "./MontaSanduiche";

export class MussarelaRalada extends MontaSanduiche {
    getNome(): string {
        return this.sanduiche.getNome() + ', queijo mussarela ralado';
    }
    getPreco(): number {
        return this.sanduiche.getPreco() + 2.0;
    }
}
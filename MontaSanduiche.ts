import { ISanduiche } from "./ISanduiche";

export class MontaSanduiche implements ISanduiche {
    constructor(protected sanduiche: ISanduiche) {}

    getPreco(): number {
        return this.sanduiche.getPreco();
    }
    getNome(): string {
        return this.sanduiche.getNome();
    }
}
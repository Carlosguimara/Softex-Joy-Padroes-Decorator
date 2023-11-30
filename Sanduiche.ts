import { ISanduiche } from "./ISanduiche";

export class Sanduiche implements ISanduiche {
    private nome: string = 'Sanduiche'
    private preco: number = 0.0;
    
    getPreco(): number {
        return this.preco;
    }
    getNome(): string {
        return this.nome;
    }
}
import { Universo } from './universo';
import { Poder } from './poder';

export class Heroi {
    id: number;
    nome: string;
    dataCadastro: Date;
    ativo: boolean;
    universo: Universo;
    poderes: Array<Poder>;

    constructor(id: number, nome: string, dataCadastro: Date, universo: Universo, poderes: Array<Poder>) {
        this.id = id;
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.ativo = true;
        this.universo = universo;
        this.poderes = poderes;
    }
}
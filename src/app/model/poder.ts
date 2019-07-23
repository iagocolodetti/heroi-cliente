export class Poder {
    id: number;
    descricao: string;
    idHeroi: number;

    constructor(id: number, descricao: string, idHeroi: number) {
        this.id = id;
        this.descricao = descricao;
        this.idHeroi = idHeroi;     
    }
}
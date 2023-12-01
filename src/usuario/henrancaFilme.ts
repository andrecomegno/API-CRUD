import { FilmeEntity } from './filme.entity';

export class FilmeHeranca extends FilmeEntity {

    constructor(nome: string, duracao: number, sinopse: string, ano: number, genero: string) {
        super(nome, duracao, sinopse, ano, genero);
    }
}

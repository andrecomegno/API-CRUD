import { FilmeEntity } from './filme.entity';

export class FilmeHeranca extends FilmeEntity {

    constructor(id: string, nome: string, duracao: number, sinopse: string, ano: number, genero: string) {
        super(id, nome, duracao, sinopse, ano, genero);
    }
}

export class Ator {
    id: string;
    nome: string;
    idade: number;
    filmesParticipados: string[];

    constructor(id: string, nome: string, idade: number, filmesParticipados: string[]) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.filmesParticipados = filmesParticipados;
    }
}

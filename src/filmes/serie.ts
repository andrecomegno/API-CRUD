export class Serie {
    id: String;
    nome: string;
    numeroEpisodios: number;
    sinopse: string;
    ano: number;
    genero: string;

    constructor(id: string, nome: string, numeroEpisodios: number, sinopse: string, ano: number, genero: string) {
        this.id = id;
        this.nome = nome;
        this.numeroEpisodios = numeroEpisodios;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = genero;
    }
}

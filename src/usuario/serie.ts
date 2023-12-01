export class Serie {
    nome: string;
    numeroEpisodios: number;
    sinopse: string;
    ano: number;
    genero: string;

    constructor(nome: string, numeroEpisodios: number, sinopse: string, ano: number, genero: string) {
        this.nome = nome;
        this.numeroEpisodios = numeroEpisodios;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = genero;
    }
}

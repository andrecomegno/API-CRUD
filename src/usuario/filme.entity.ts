export class FilmeEntity {
    nome: string;
    duracao: number;
    sinopse: string;
    ano: number;
    genero: string;

    constructor(nome: string, duracao: number, sinopse: string, ano: number, genero: string) {
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = genero;
    }

    compartilhar(): string {
        return `Estou assistindo o filme ${this.nome} que conta a seguinte história: ${this.sinopse}, foi lançado em ${this.ano} e tem duração de ${this.duracao} minutos. Assista também!!`;
    }
}

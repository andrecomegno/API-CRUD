import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class FilmeDTO {
    @IsString()
    @IsNotEmpty({message: "Nome Não pode ser vazio"})
    nome: string;

    @IsInt()
    @IsNotEmpty({message: "Duracao Não pode ser vazio"})
    duracao: number;

    @IsString()
    @IsNotEmpty({message: "Sinopse Não pode ser vazio"})
    sinopse: string;

    @IsInt()
    @IsNotEmpty({message: "Ano Não pode ser vazio"})
    ano: number;

    @IsString()
    @IsNotEmpty({message: "Genero Não pode ser vazio"})
    genero: string;
}

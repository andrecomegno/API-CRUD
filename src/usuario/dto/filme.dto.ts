import { IsInt, IsString } from "class-validator";

export class FilmeDTO {
    @IsString()
    nome: string;

    @IsInt()
    duracao: number;

    @IsString()
    sinopse: string;

    @IsInt()
    ano: number;

    @IsString()
    genero: string;
}

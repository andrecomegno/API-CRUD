import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AtualizarFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "Nome do Filme não pode ser vazio"})
    @IsOptional()
    nome:string;
    
    @IsInt()
    @IsNotEmpty({message: "Duracao do Filme não pode ser vazio"})
    @IsOptional()
    duracao: number;

    @IsString()
    @IsNotEmpty({message: "Sinopse do Filme não pode ser vazio"})
    @IsOptional()
    sinopse: string;

    @IsInt()
    @IsNotEmpty({message: "Ano do Filme não pode ser vazio"})
    @IsOptional()
    ano: number;

    @IsString()
    @IsNotEmpty({message: "Genero do Filme não pode ser vazio"})
    @IsOptional()
    genero: string;
}
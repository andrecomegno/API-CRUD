import { Module } from "@nestjs/common";
import { FilmeController } from "./filme.controller"; 
import { FilmesArmazenados } from "./filme.dm";

@Module({
    controllers:[FilmeController],
    providers: [FilmesArmazenados]
})

export class FilmeModule{}
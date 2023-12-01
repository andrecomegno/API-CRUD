import { Module } from "@nestjs/common";
import { FilmeController } from "./filme.controller"; 

@Module({
    controllers:[FilmeController],
    providers: []
})

export class FilmeModule{
    
}
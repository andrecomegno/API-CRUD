import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FilmeDTO } from './dto/filme.dto';
import { FilmesArmazenados } from './filme.dm';
import { ListaFilmeDTO } from './dto/listaFilme.dto';
import { FilmeEntity } from './filme.entity';
import { v4 as uuid } from 'uuid'

@Controller('filmes')
export class FilmeController {

    constructor(private clsFilmeArmazenados: FilmesArmazenados){}

    @Get()
    async RetornoFilmes(){
        const filmesListados = await this.clsFilmeArmazenados.Filmes;
        const listaRetorno = filmesListados.map(
            filme => new ListaFilmeDTO(
                filme.id,
                filme.nome,
                filme.duracao,
                filme.sinopse,
                filme.ano,
                filme.genero
            )
        );
        
        return listaRetorno;
    }

    @Post()
    async CriaFilme(@Body() dadosFilme: FilmeDTO){
        var filme = new FilmeEntity(
            uuid(),
            dadosFilme.nome,
            dadosFilme.duracao,
            dadosFilme.sinopse,
            dadosFilme.ano,
            dadosFilme.genero
        )        
            
        this.clsFilmeArmazenados.AdicionarFilme(filme);        
        var retorno={
            id: filme.id,
            message:'Filme Criado'
        }
        
        return retorno
    }

    @Delete('/:id')
    async removeFilme(@Param('id') id: string){
        const filmeRemovido = await this.clsFilmeArmazenados.removeFilme(id)

        return{
            filme: filmeRemovido,
            message: 'Filme removido'
        }
    }
}


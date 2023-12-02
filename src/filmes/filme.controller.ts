import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AtualizarFilmeDTO } from './dto/atualizarFilme.dto';
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

    @Get(':id/compartilhar')
    compartilharFilme(@Param('id') id: string): string {
        return this.clsFilmeArmazenados.compartilharFilme(id);
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
            message:'Filme Criado =)'
        }
        
        return retorno
    }

    @Put('/:id')
    async atualizaFilme(@Param('id') id: string, @Body() novosDados: AtualizarFilmeDTO){
        const filmeAtualizado = await this.clsFilmeArmazenados.atualizaFilme(id, novosDados)

        return{
            usuario: filmeAtualizado,
            message: 'Filme Atualizado com Sucesso ! ;)'
        }
    }

    @Delete('/:id')
    async removeFilme(@Param('id') id: string){
        const filmeRemovido = await this.clsFilmeArmazenados.removeFilme(id)

        return{
            filme: filmeRemovido,
            message: 'Filme removido com Sucesso :S'
        }
    }
}


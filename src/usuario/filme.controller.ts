import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FilmeDTO } from './dto/filme.dto';

@Controller('filmes')
export class FilmeController {
    @Post()
    criarFilme(@Body() filmeDTO: FilmeDTO): string {
        console.log('Recebeu uma solicitação para criar um filme:', filmeDTO);
        return `Filme "${filmeDTO.nome}" criado com sucesso!`;
    }  

    @Get(':id')
    obterFilme(@Param('id') id: string): string {
        console.log('Recebeu uma solicitação para obter informações do filme com ID:', id);
        return `Informações do filme com ID ${id}`;
    }

}


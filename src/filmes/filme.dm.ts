import { Injectable } from "@nestjs/common";
import { FilmeEntity } from "./filme.entity";

@Injectable()
export class FilmesArmazenados{
    #filme: FilmeEntity[] = [];  

    AdicionarFilme(filmes: FilmeEntity){
        this.#filme.push(filmes);
    }

    atualizaFilme(id: string, dadosAtualizacao: Partial<FilmeEntity>){
        const filme = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                filme[chave] = valor;
            }
        )

        return filme;
    }

    compartilharFilme(id: string): string {
        const filme = this.buscaPorID(id);
        return filme.compartilhar();
    }

    async removeFilme(id: string){
        const filme = this.buscaPorID(id);

        this.#filme = this.#filme.filter(
            filmeSalvo => filmeSalvo.id !== id
        )

        return filme;
    }

    private buscaPorID(id: string){
        const possivelFilme = this.#filme.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if (!possivelFilme){
            throw new Error('Filme não Encontrado =/')
        }
        
        return possivelFilme;
    }

    get Filmes(){        
        return this.#filme;
    }
}
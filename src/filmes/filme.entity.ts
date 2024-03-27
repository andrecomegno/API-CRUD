import { GENERO } from "src/genero/genero.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
@Entity()
export class FILME{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255})
    NOME: string;

    @Column('int')
    DURACAO: number;

    @Column({length: 255})
    SINOPSE: string;
    
    @Column({length: 255})
    ANO: string;
    
    @ManyToOne(() => GENERO, genero => genero.produtos)
    @JoinColumn({ name: 'IDGENERO', referencedColumnName:'ID'})
    genero: GENERO;
}

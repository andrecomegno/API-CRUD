import { Module } from '@nestjs/common';
import { FilmeModule } from './filmes/filme.module';

@Module({
  imports: [FilmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

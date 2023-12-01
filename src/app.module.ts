import { Module } from '@nestjs/common';
import { FilmeModule } from './usuario/filme.module';

@Module({
  imports: [FilmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

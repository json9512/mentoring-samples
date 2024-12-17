import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DigimonModule } from './digimon/digimon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
    }),
    DigimonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

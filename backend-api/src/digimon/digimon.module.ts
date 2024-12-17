import { Module } from '@nestjs/common';
import { DigimonService } from './digimon.service';
import { DigimonController } from './digimon.controller';

@Module({
  controllers: [DigimonController],
  providers: [DigimonService],
})
export class DigimonModule {}

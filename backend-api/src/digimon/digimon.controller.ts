import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DigimonService } from './digimon.service';
import { CreateDigimonDto } from './dto/create-digimon.dto';
import { UpdateDigimonDto } from './dto/update-digimon.dto';

@Controller('digimon')
export class DigimonController {
  constructor(private readonly digimonService: DigimonService) {}

  @Post()
  create(@Body() createDigimonDto: CreateDigimonDto) {
    return this.digimonService.create(createDigimonDto);
  }

  @Get()
  findAll() {
    return this.digimonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.digimonService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDigimonDto: UpdateDigimonDto) {
    return this.digimonService.update(+id, updateDigimonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.digimonService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateDigimonDto } from './dto/create-digimon.dto';
import { UpdateDigimonDto } from './dto/update-digimon.dto';

@Injectable()
export class DigimonService {
  create(createDigimonDto: CreateDigimonDto) {
    return 'This action adds a new digimon';
  }

  async findAll() {
    const result = await fetch(process.env.DIGIMON_API_URL, {
      method: 'GET',
    });

    if (!result.ok) {
      throw new Error('Failed to fetch digimons');
    }

    const body = await result.json();
    return body;
  }

  async findOne(id: string) {
    const result = await fetch(process.env.DIGIMON_API_URL + '/name/' + id, {
      method: 'GET',
    });

    if (!result.ok) {
      throw new Error('Failed to fetch digimon');
    }

    const body = await result.json();
    return body;
  }

  update(id: number, updateDigimonDto: UpdateDigimonDto) {
    return `This action updates a #${id} digimon`;
  }

  remove(id: number) {
    return `This action removes a #${id} digimon`;
  }
}

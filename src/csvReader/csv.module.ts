import { Module } from '@nestjs/common';
import { CsvService } from './csv.service';
import { CsvController } from './csv.controller';
import { CsvParser } from 'nest-csv-parser'

@Module({
  controllers: [CsvController],
  providers: [CsvParser, CsvService],

})
export class CsvModule { }

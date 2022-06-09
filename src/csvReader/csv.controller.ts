import { Controller, StreamableFile, Get, Post, Body, Patch, Param, UseInterceptors } from '@nestjs/common';
import { CsvService } from './csv.service';
import { CreateCsvDto } from './dto/create-csv.dto';



@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) { }


  @Post()
  create(@Body() createCsvDto: CreateCsvDto) {
    return this.csvService.create(createCsvDto);
  }


  @Get('/')
  findAll() {
    return this.csvService.parse();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.csvService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCsvDto: UpdateCsvDto) {
  //   return this.csvService.update(+id, updateCsvDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.csvService.remove(+id);
  // }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('https://app.omie.com.br/api/v1/produtos/pedido/')
export class SalesController {
  constructor(private readonly salesService: SalesService) { }

  @Post('/IncluirPedido')
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get('/ListarPedidos')
  findAll() {
    return this.salesService.findAll();
  }

  @Get('/ConsultarCliente:id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Patch('/AlterarPedidoVenda:id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete('/ListarPedidos:id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }
}

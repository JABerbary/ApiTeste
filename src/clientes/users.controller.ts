import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Patch } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
//import { UserDto } from 'src/dto/user.dto';
import { UsersService } from './users.service';
import { LoginDTO } from '../Model-clientes/users.model';
import { UsersDTO } from 'src/Model-clientes/Dto/UsersDto';
import { Users } from './user.entity';

//nome para montar o link
@Controller('https://app.omie.com.br/api/v1/geral/clientes/User')
export class UsersController {

  constructor(private readonly userService: UsersService,) { }

  @Post('/IncluirCliente/')
  create(@Body() createUserDto: UsersDTO): Promise<Users> {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/ConsultarCliente')
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Get('/ConsultarCliente:id')
  async getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Patch('/AlterarCliente:id')
  update(@Param('id') id: number, @Body() updateUserDto: UsersDTO): Promise<Users> {
    return this.userService.editUser(id, updateUserDto);
  }

  @Delete('/ExcluirCliente:id')
  async remove(@Param('id') @Body() id: number): Promise<Users> {
    return this.userService.remove(id);
  }


  //--OLD--
  // @Post('/')
  // create(@Body() createUserDto: UserDTO): Promise<User> {
  //   return this.userService.create(createUserDto);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('/')
  // async findAll(): Promise<UserDTO[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // async getById(@Param('id') id: number): Promise<any> {
  //   return this.userService.getById(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updateUserDto: UserDTO) {
  //   return this.userService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: number) {
  //   return this.userService.remove(id);
  // }

}

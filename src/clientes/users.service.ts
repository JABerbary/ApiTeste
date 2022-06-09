import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { LoginDTO, UsersRepository } from '../Model-clientes/users.model';;
import { NotFoundException } from '@nestjs/common';
import { UsersDTO } from 'src/Model-clientes/Dto/UsersDto';


@Injectable()
export class UsersService {


  // constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  // os promises foram subistituídos : Promise<UserDTO> para Promise<User>
  constructor(@InjectRepository(UsersRepository) private userRepository: UsersRepository) { }

  async create(userDTO: UsersDTO): Promise<Users> {
    // return this.userRepository.save(user);
    return await this.userRepository.createUser(userDTO);

  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();;
  }

  async getByEmail(email: string): Promise<LoginDTO> {
    return await this.userRepository.findOne({ email });
  }

  async getById(id: number): Promise<Users> {
    return await this.userRepository.findOne(id);
  }

  public async editUser(
    userId: number,
    createUserDto: UsersDTO,): Promise<Users> {

    const editedUser = await this.userRepository.findOne(userId);
    if (!editedUser) {
      throw new NotFoundException('Product not found');
    }
    return this.userRepository.editUser(createUserDto, editedUser);
  }

  async remove(userId: number,): Promise<Users> {

    //var user_status: string = "0";
    const user = await this.getById(userId);
    return await this.userRepository.remove(user);


  }

}

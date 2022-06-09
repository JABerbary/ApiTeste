import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { Users } from '../clientes/user.entity';
import { Repository, EntityRepository } from 'typeorm';
import { UsersDTO } from './Dto/UsersDto';



export class UsersModel { }

//dto testing rpository validation
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {



    public async createUser(

        createUserDto: UsersDTO,
    ): Promise<Users> {


        const { first_name, email, passwords } = createUserDto;


        const user = new Users();
        user.first_name = first_name;
        user.email = email;
        user.passwords = passwords;
        console.log(user);
        await user.save();
        return user;

    }

    public async editUser(
        createUserDto: UsersDTO,
        editedUser: Users,
    ): Promise<Users> {
        const { first_name, email, passwords } = createUserDto;

        editedUser.first_name = first_name;
        editedUser.email = email;
        editedUser.passwords = passwords;
        await editedUser.save();

        return editedUser;
    }

}


////--old--
// export class UsersDTO {

//     @ApiProperty()
//     user_id: number;

//     @ApiProperty()
//     @IsString()
//     first_name: string;


//     @ApiProperty()
//     @IsString()
//     email: string;

//     @ApiProperty()
//     @IsString()
//     passwords: string;

//     @ApiProperty()
//     @IsString()
//     user_status: string;
// }


export class LoginDTO {
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    passwords: string;
}

export class UserBody {
    @ApiProperty()
    UserDTO;
}


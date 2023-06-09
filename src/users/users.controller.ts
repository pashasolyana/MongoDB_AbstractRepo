import { UpdateUserDto } from './dto/update-user.dto';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':userId')
    async getUser(@Param('userId') userId: string): Promise<User> {
      return this.usersService.getUserById(userId);
    }
  
    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }
  
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto.email, createUserDto.age)
    }
  
    @Patch(':userId')
    async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.updateUser(userId, updateUserDto);
    }
}

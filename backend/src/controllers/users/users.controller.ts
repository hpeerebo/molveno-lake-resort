import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {UsersService} from '../../features/users/services/users/users.service';
import {ApiUseTags} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';
import {JwtPayloadDecorator} from '../../features/decorators/jwt-payload-decorator';
import {JwtPayload} from '../../features/users/interfaces/jwt-payload';
import { CreateUserDto } from 'src/features/users/dtos/create-user-dto';
import { User } from 'src/models/user';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {
	}

	@Post()
	saveUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.saveUser(createUserDto.userEntity());
	}

	@Get()
	async users(@JwtPayloadDecorator() jwtPayload: JwtPayload): Promise<User[]> {
		const userEntities = (await this.usersService.users()) || [];
		return userEntities.map(userEntity => User.fromUserEntity(userEntity))
	}

	@Get(':userid')
	async user(@Req() req: any, @Param('userid') userId: number): Promise<User> {
		const userEntity = await this.usersService.user(userId);
		return User.fromUserEntity(userEntity);
	}

	@Delete()
	deleteUser() {
		return this.usersService.deleteUsers();
	}
}

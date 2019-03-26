import {IsEmail, IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

import * as Bcrypt from 'bcrypt';
import { UserEntity } from '../entities/user-entity';
import {ICreateUser} from '../../../../../shared/interfaces/create-user.interface'

export class CreateUserDto implements ICreateUser{
	rol: string;
	@IsEmail()
	@ApiModelProperty()
	userName: string;

	@IsString()
	@ApiModelProperty()
	role: string;

	@IsString()
	@ApiModelProperty()
	password: string;

	constructor(userName: string, role: string, passWord: string) {
		this.userName = userName;
		this.role = role;
		this.password = passWord;
	}

	public userEntity(): UserEntity {
		return new UserEntity(this.userName, this.role, Bcrypt.hashSync(this.password, 1));
	}
}

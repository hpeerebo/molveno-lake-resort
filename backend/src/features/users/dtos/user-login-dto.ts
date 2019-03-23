import {IsEmail, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';
import {IUserLogin} from '../../../../../shared/interfaces/user-login-interface'

export class UserLoginDto implements IUserLogin {
	@IsEmail()
	@ApiModelProperty()
	userName: string;

	@IsString()
	@ApiModelProperty()
	password: string;

	constructor(userName: string, passWord: string) {
		this.userName = userName;
		this.password = passWord;
	}
}

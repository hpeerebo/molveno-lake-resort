import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {JwtPayload} from '../../interfaces/jwt-payload';
import {UserLoginDto} from '../../dtos/user-login-dto';
import {Response, Request } from 'express';
import { UsersModuleConf } from '../../users.module.conf';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {}

	async signIn(response: Response, request: Request, userLoginDto: UserLoginDto): Promise<{ token: string, duration: number }> {
		const userExists: boolean = !!await this.usersService.userIsValid(userLoginDto);

		if (userExists) {
			const jwtToken = this.jwtToken(userLoginDto);
			// response.render('send', { csrfToken: request.csrfToken() });
			// response.cookie('jwt', jwtToken, {maxAge: UsersModuleConf.jwtValidDuration, httpOnly: true});
			const response = {
				token: jwtToken,
				duration: UsersModuleConf.jwtValidDuration
			};
			return response;
		} else throw new HttpException("invalid credentials", HttpStatus.UNAUTHORIZED);
	}

	private jwtToken(userLoginDto: UserLoginDto): string {
		return this.jwtService.sign({
			email: userLoginDto.userName,
			duration: UsersModuleConf.jwtValidDuration,
			role: 'admin'
		});
	}

	async validateUser(jwtPayload: JwtPayload): Promise<any> {
		return await this.usersService.findUserByUserName(jwtPayload.email);
	}
}

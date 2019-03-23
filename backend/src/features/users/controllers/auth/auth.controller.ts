import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {UserLoginDto} from '../../dtos/user-login-dto';
import {AuthService} from '../../services/authentication/auth.service';
import {ApiUseTags} from '@nestjs/swagger';
import { Response, Request } from 'express';


@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {
	}

	@Post('login')
	async login(@Res() response: Response, @Req() request: Request, @Body() userLoginDto: UserLoginDto): Promise<void> {
		const jwtObj = await this.authService.signIn(response, request, userLoginDto);
		response.send(jwtObj);
	}
}

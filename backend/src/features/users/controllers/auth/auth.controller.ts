import {Body, Controller, Post, Req} from '@nestjs/common';
import {UserLoginDto} from '../../dtos/user-login-dto';
import {AuthService} from '../../services/authentication/auth.service';
import {ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {
	}

	@Post('login')
	login(@Req() req, @Body() userLoginDto: UserLoginDto) {
		return this.authService.signIn(userLoginDto);
	}
}

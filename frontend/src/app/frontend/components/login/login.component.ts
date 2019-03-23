import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AutenticationService } from 'src/app/services/autentication.service';
import {IUserLogin} from '../../../../../../shared/interfaces/user-login-interface'
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public readonly loginForm = new FormGroup({
		userName: new FormControl(undefined, [Validators.required, Validators.email]),
		password: new FormControl(undefined, [Validators.required])
	});

	constructor(private authService: AuthService) {
	}

	ngOnInit() {
		//this.loginForm.valueChanges.subscribe(console.log);
	}

	public onSubmit() {
		this.authService.login(LoginComponent.userLogin(this.loginForm)).subscribe();
	}

	private static userLogin(loginForm: FormGroup): IUserLogin {
		return {
			userName: loginForm.controls.userName.value,
			password: loginForm.controls.password.value
		}
	}

}

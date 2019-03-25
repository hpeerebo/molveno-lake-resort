import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UsersService } from 'src/app/frontend/shared/services/users.service';
import { ICreateUser } from '../../../../../../shared/interfaces/create-user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  /*here the form is created and a default value is given (undefined) along with some validations*/
	public readonly signUpForm = new FormGroup({
		userName: new FormControl(undefined, [Validators.required, Validators.email]),
		role: new FormControl(undefined, Validators.required),
		password: new FormControl(undefined, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
		userNameVerification: new FormControl(undefined, [Validators.required])
	}, SignupComponent.emailVerificationFormGroupValidator());

	constructor(private userService: UsersService, private router: Router) {
	}

	ngOnInit() {
	}

	public onSubmit(): void {
    this.userService.saveUser(SignupComponent.createUser(this.signUpForm)).subscribe();
    this.router.navigate(['login']);

	}

	public static createUser(signUpForm: FormGroup): ICreateUser {
		return {
			userName: signUpForm.controls.userName.value,
			role: signUpForm.controls.role.value,
			password: signUpForm.controls.password.value
		}
	}

	private static emailVerificationFormGroupValidator(): ValidatorFn {
		return (control: AbstractControl) => {
			const formGroup = control as FormGroup;
			if (formGroup.controls.userName.value === formGroup.controls.userNameVerification.value) return null;
			else return {emailIsNotTheSameError: "email address is not the same"}
		}
	}
}


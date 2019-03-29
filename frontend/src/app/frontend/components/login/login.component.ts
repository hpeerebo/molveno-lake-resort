import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first, tap, catchError } from "rxjs/operators";
import { AutenticationService } from "src/app/services/autentication.service";
import { IUserLogin } from "../../../../../../shared/interfaces/user-login-interface";
import { AuthService } from "../../shared/services/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { of } from 'rxjs';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public readonly loginForm = new FormGroup({
    userName: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    //this.loginForm.valueChanges.subscribe(console.log);
  }

  public onSubmit(): void {
    this.authService.login(LoginComponent.userLogin(this.loginForm)).pipe(
      tap(user => this.router.navigate(['managementportal/home'])),
      catchError((httpErrorResponse: HttpErrorResponse) => {
        switch (httpErrorResponse.status) {
          case 500:
            alert("Server Error. Neem contact met de beheerder op 0612345678");
            break;
          case 401:
          alert("gebruikersnaam of wachtwoord niet correct")
          break;
        }
        return of(httpErrorResponse)
      })
    ).subscribe()
  }

  private static userLogin(loginForm: FormGroup): IUserLogin {
    return {
      userName: loginForm.controls.userName.value,
      password: loginForm.controls.password.value
    };
  }
}

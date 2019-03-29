import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../../../../../../shared/interfaces/user-login-interface';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly api = "api/auth/login";
	//public token = "732863"

	constructor(private http: HttpClient, private router: Router) {
	}

  public login(userLogin: IUserLogin): Observable<any> {
    return this.http.post<Tokenresponse>(AuthService.api, userLogin)
      .pipe(
        tap(data => {
          localStorage.setItem("token", data.token)
        }), take(1)
      );
  }

	public token(): string{
		return localStorage.getItem("token") as string;
	}
	public validateUser(): boolean{
		if (this.token()){
			return true;
		}
		else return false
	}

}
interface Tokenresponse {
	token: string;
}

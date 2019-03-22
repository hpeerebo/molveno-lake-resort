import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../../../../../../shared/interfaces/user-login-interface';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly api = "api/auth/login";

	constructor(private http: HttpClient) {
	}

	public login(userLogin: IUserLogin): Observable<any> {
		return this.http.post(AuthService.api, userLogin).pipe(take(1));
	}
}

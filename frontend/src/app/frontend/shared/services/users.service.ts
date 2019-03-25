import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICreateUser} from '../../../../../../shared/interfaces/create-user.interface'
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private static api = 'api/users';

	constructor(private http: HttpClient) {
	}

	public saveUser(user: ICreateUser): Observable<any> {
		return this.http.post(UsersService.api, user).pipe(take(1));
	}
}

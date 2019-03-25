import {Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';

import {Observable} from 'rxjs';
import { getToken } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {
	constructor(public auth: AuthService) {
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: {
				//Authorization: `Bearer `+ this.auth.token(),
				Authorization: `Bearer ${this.auth.token()}`,
			}
		});
		return next.handle(request);
	}
}

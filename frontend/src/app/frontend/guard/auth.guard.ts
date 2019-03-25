import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(public auth: AuthService, public router: Router) {}
	canActivate(): boolean {
		if (this.auth.validateUser()){
      //this.router.navigate(['managementportal/home'])
			return true
		}
		else{
      //this.router.navigate(['home'])
			return false;
		}
	}

}

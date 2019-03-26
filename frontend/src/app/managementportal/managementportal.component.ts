import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ManagementPortal-root',
  templateUrl: './managementportal.component.html',
  styleUrls: ['./managementportal.component.scss']
})
export class ManagementportalComponent {
  constructor(private router: Router){}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}

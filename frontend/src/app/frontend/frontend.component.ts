import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'frontend-root',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontEndComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) {}
  multilanguage: boolean = false;
  nl = { language: 'nl', hotel: 'Hotel', rooms: 'Kamers', restaurant: 'Restaurant', activities: 'Activiteiten', contact: 'Contact', login: 'Log in' };
  en = { language: 'en', hotel: 'Hotel', rooms: 'Rooms', restaurant: 'Restaurant', activities: 'Activities', contact: 'Contact', login: 'Login' };
  it = { language: 'it', hotel: 'Albergo', rooms: 'Camere', restaurant: 'Ristorante', activities: 'Attività', contact: 'Contatto', login: 'Accesso' };

  siteLanguage = {};
  
  hotel: string = '';
  rooms: string = '';
  restaurant: string = '';
  activities: string = '';
  contact: string = '';
  login: string = '';

  setLanguage(language: string) {
    switch(language) {
      case 'en': {
        this.siteLanguage = this.en;
        break;
      }
      case 'it': {
        this.siteLanguage = this.it;
        break;
      }
      case 'nl': {
        this.siteLanguage = this.nl;
        break;
      }
      default: {
        this.siteLanguage = this.en;
        break;
      }
    }
  }

  ngOnInit() {
    this.setLanguage('nl')
  }
}

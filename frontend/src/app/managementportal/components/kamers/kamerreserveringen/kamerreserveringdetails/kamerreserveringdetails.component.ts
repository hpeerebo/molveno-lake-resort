import { Component, OnInit, Input } from '@angular/core';
import { KamerReservering } from 'src/app/models/kamerreservering';

@Component({
  selector: 'app-kamerreserveringdetails',
  templateUrl: './kamerreserveringdetails.component.html',
  styleUrls: ['./kamerreserveringdetails.component.scss']
})
export class KamerreserveringdetailsComponent implements OnInit {
 @Input() kamerreservering: KamerReservering | undefined = undefined;
  constructor() { }

  ngOnInit() {
  }

}

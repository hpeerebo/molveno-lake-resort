import { Component, OnInit } from '@angular/core';
import { RoomsService, KamerResponse } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-kamers',
  templateUrl: './kamers.component.html',
  styleUrls: ['./kamers.component.scss']
})
export class BackEndKamersComponent implements OnInit {
  public kamers :KamerResponse[] = [];
 // constructor() { }
 constructor(private roomservice: RoomsService){
  
  roomservice.getTables().subscribe(result => this.kamers = result);
  //console.log(this.kamers);
}

  ngOnInit() {
  }

}

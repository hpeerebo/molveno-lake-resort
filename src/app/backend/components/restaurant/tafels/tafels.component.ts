import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from 'src/app/models/tafel';
import { TafelsService } from 'src/app/services/tafels.service';

@Component({
  selector: 'app-tafels',
  templateUrl: './tafels.component.html',
  styleUrls: ['./tafels.component.scss']
})

export class TafelsComponent {
  public tafels: Observable<Tafel[]> = this.tafelsService.getAllTafels();

  constructor(private tafelsService: TafelsService) { }
}

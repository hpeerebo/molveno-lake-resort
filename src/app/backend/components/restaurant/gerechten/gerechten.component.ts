import { Component } from '@angular/core';
import { GerechtenService } from 'src/app/services/gerechten.service';
import { Observable } from 'rxjs';
import { Gerecht } from 'src/app/models/gerecht';

@Component({
  selector: 'app-gerechten',
  templateUrl: './gerechten.component.html',
  styleUrls: ['./gerechten.component.scss']
})
export class GerechtenComponent {
  public gerechten: Observable<Gerecht[]> = this.gerechtenService.getAllGerechten();

  constructor(private gerechtenService: GerechtenService) {}
}

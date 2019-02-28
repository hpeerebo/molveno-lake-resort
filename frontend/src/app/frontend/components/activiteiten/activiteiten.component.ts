import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activiteit } from 'src/app/models/activiteit';
import { ActiviteitenService } from 'src/app/services/activiteiten.service';

@Component({
  selector: 'app-activiteiten',
  templateUrl: './activiteiten.component.html',
  styleUrls: ['./activiteiten.component.scss']
})
export class ActiviteitenComponent implements OnInit {
  images = [
    'assets/img/activiteit_wandel.png',
    'assets/img/activiteit_wijn.png',
    'assets/img/activiteit_zeilen.png'
];
  public activiteiten: Observable<
  Activiteit[]
> = this.activiteitenService.getAllActiviteiten();

constructor(
  private activiteitenService: ActiviteitenService,
) {}

  ngOnInit() {}
}

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
public activiteiten$: Observable<Activiteit[]> = this.activiteitenService.data$


constructor(
  private activiteitenService: ActiviteitenService,
) {}

  ngOnInit() {}
}

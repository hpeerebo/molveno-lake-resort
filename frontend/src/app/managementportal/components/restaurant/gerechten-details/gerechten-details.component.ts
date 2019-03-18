import { Component, OnInit } from '@angular/core';
import { GerechtenService } from 'src/app/services/gerechten.service';
import { GerechtDetails } from 'src/app/models/gerecht-details';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-gerechten-details',
  templateUrl: './gerechten-details.component.html',
  styleUrls: ['./gerechten-details.component.scss']
})
export class GerechtenDetailsComponent implements OnInit {
  public gerechtDetails$: Observable<GerechtDetails> = this.route.params
    .pipe(
      switchMap(params => this.gerechtService.getGerechtDetails(params.id))
    );

  constructor(private route: ActivatedRoute, public gerechtService: GerechtenService) {}

  ngOnInit() {}
}

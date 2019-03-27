import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activiteit } from 'src/app/models/activiteit';
import { ActiviteitenService } from 'src/app/services/activiteiten.service';
import { CreateActiviteitReservering } from 'src/app/models/create-activiteit-reservering';
import { FormActiviteitResComponent } from 'src/app/shared/components/form-activiteit-res/form-activiteit-res.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activiteiten',
  templateUrl: './activiteiten.component.html',
  styleUrls: ['./activiteiten.component.scss']
})
export class ActiviteitenComponent implements OnInit {

  public activiteiten: Observable<
  Activiteit[]
> = this.activiteitenService.getAllActiviteiten();



constructor(
  private activiteitenService: ActiviteitenService,
  private modalService: NgbModal
) {}

  ngOnInit() {}


openFormActiviteitResModal(planningId: number, reserveringen?: CreateActiviteitReservering) {
  const modal = this.modalService.open(FormActiviteitResComponent);
  if (reserveringen) {
    modal.componentInstance.reserveringen = reserveringen;
  }
}
}

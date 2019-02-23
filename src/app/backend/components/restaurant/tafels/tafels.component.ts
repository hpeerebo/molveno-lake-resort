import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tafel } from 'src/app/models/tafel';
import { TafelsService } from 'src/app/services/tafels.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tafels',
  templateUrl: './tafels.component.html',
  styleUrls: ['./tafels.component.scss']
})
export class TafelsComponent {
  public tafels: Observable<Tafel[]> = this.tafelsService.getAllTafels();

  public tafelsForm = this.formBuilder.group({
    tafelnummer: [0, Validators.min(1)],
    aantalPersonen: [0, [Validators.min(1), Validators.max(12)]]
  });

  constructor(private tafelsService: TafelsService, private modalService: NgbModal, private formBuilder: FormBuilder) {}

  get tafelnummer() {
    return this.tafelsForm.get('tafelnummer');
  }

  get aantalPersonen() {
    return this.tafelsForm.get('aantalPersonen');
  }

  open(content: any) {
    this.modalService.open(content).result.then(
      result => {
        this.formClosed(result);
      },
      reason => {
        this.formDismissed(reason);
      }
    );
  }

  formClosed(result: any) {
    result === 'save' && console.log(this.tafelsForm.value);
  }

  formDismissed(reason: any) {}
}

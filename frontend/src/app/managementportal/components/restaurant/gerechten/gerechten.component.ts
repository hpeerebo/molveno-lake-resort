import { Component, Directive, Input, Output, EventEmitter } from '@angular/core';
import { GerechtenService } from 'src/app/services/gerechten.service';
import { Observable } from 'rxjs';
import { Gerecht } from 'src/app/models/gerecht';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGerechtComponent } from 'src/app/shared/components/form-gerecht/form-gerecht.component';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { IPaginate } from 'src/app/interfaces/paginate';

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
@Component({
  selector: 'app-gerechten',
  templateUrl: './gerechten.component.html',
  styleUrls: ['./gerechten.component.scss']
})
export class ManagementPortalGerechtenComponent {

  field: string = "naam";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return console.log(this.field), this.field;
  }

  gerechten$: Observable<Gerecht[]> = this.gerechtenService.gerechten$;
  count$: Observable<Number> = this.gerechtenService.count$;
  page: number = 1;
  pageSize: number = 10;
  sortColumn: string = 'naam';

  constructor(public gerechtenService: GerechtenService, private modalService: NgbModal) {}

  openFormGerechtModal(gerecht?: Gerecht) {
    const modal = this.modalService.open(FormGerechtComponent);

    if (gerecht) {
      modal.componentInstance.gerecht = gerecht;
    }

    modal.result
      .then(result => {
        if (result.id) {
          this.gerechtenService.updateGerecht(result);
        } else {
          this.gerechtenService.addNewGerecht(result);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderGerecht(gerecht: Gerecht) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === 'yes') {
          this.gerechtenService.deleteGerecht(gerecht);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  onSort(column: string) {
    this.sortColumn = column;
  }
}

export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}



import { Component, OnInit, Input } from '@angular/core';
import { Kamer } from 'src/app/models/kamer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kamer-modal-confirm',
  templateUrl: './kamer-modal-confirm.component.html',
  styleUrls: ['./kamer-modal-confirm.component.scss']
})
export class KamerModalConfirmComponent implements OnInit {

  @Input() model: Kamer | undefined;
  @Input() action: string = '';
  textToDisplay: string = ''

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    switch(this.action){
      case 'delete':
        this.textToDisplay = 'verwijderd';
        break;
      case 'add':
        this.textToDisplay = 'toegevoegd';
        break;
      case 'edit':
        this.textToDisplay = 'gewijzigd';
        break;
      case 'reserve':
        this.textToDisplay = 'gereserveerd';
        break;
      default: this.textToDisplay = '';

    }

    }
  }

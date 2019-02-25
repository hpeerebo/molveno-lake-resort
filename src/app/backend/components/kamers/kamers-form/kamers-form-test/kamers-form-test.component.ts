import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kamers-form-test',
  templateUrl: './kamers-form-test.component.html',
  styleUrls: ['./kamers-form-test.component.scss']
})
export class KamersFormTestComponent implements OnInit {
  closeResult: string = "";
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

}

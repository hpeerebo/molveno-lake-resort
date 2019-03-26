import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-form-download-kamerresevering',
  templateUrl: './form-download-kamerresevering.component.html',
  styleUrls: ['./form-download-kamerresevering.component.scss']
})
export class FormDownloadKamerreseveringComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

}

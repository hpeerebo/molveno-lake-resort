import { Component, OnInit, Input } from '@angular/core';
import { Kamer } from '../kamer';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-kamer-details',
  templateUrl: './kamer-details.component.html',
  styleUrls: ['./kamer-details.component.scss']
})
export class KamerDetailsComponent implements OnInit {
//  @Input() kamer: Kamer | undefined;
closeResult: string = "";

constructor(private modalService: NgbModal) {}

open(content: NgbModal) {
  this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

  ngOnInit() {

  }

}

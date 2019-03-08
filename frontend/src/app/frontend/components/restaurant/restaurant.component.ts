import { GerechtenService } from 'src/app/services/gerechten.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Gerecht } from 'src/app/models/gerecht';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  images = ['assets/img/dishes/car1.jpg', 'assets/img/dishes/car2.jpg', 'assets/img/dishes/car3.jpg'];
  public gerechten: Observable<Gerecht[]> = this.gerechtenService.getAllGerechten();

  constructor(private gerechtenService: GerechtenService, private modalService: NgbModal) {}

  closeResult = '';

    open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {}
}

import { Component, PipeTransform } from "@angular/core";
import { ActiviteitenService } from "src/app/services/activiteiten.service";
import { Observable } from "rxjs";
import { Activiteit } from "src/app/models/activiteit";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { FormActiviteitComponent } from "src/app/shared/components/form-activiteit/form-activiteit.component";
import { ModalConfirmComponent } from "src/app/shared/components/modal-confirm/modal-confirm.component";
import { CreateActiviteit } from "src/app/models/create-activiteit";
import { FormControl } from "@angular/forms";
import { DecimalPipe } from "@angular/common";
import { FormActiviteitMaakPlanningComponent } from 'src/app/shared/components/form-activiteit-maak-planning/form-activiteit-maak-planning.component';
import { ActiviteitenPlanningService } from 'src/app/services/activiteiten-planning.service';

@Component({
  selector: "app-activiteiten",
  templateUrl: "./activiteiten.component.html",
  providers: [DecimalPipe],
  styleUrls: ["./activiteiten.component.scss"]
})
export class ManagementPortalActiviteitenComponent {
  public activiteiten$: Observable<Activiteit[]> = this.activiteitenService.getAllActiviteiten();

  public field: string = "";
  public show: string = "";
  public filter = new FormControl("");

  constructor(
    public pipe: DecimalPipe,
    private activiteitenService: ActiviteitenService,
    private ActiviteitenPlanningService: ActiviteitenPlanningService,
    private modalService: NgbModal) {
    // this.activiteiten$ = this.filter.valueChanges.pipe(
    //   startWith(""),
    //   map(naam => search(naam, pipe))
    // );
  }

  public clickColumnHandler(event: string): string {
    this.field = event;
    return this.field;
  }

  openCreatePlanning(activiteitenMaakPlanning: Activiteit) {
    const modal = this.modalService.open(FormActiviteitMaakPlanningComponent);
    modal.componentInstance.activiteit = activiteitenMaakPlanning;

    modal.result
      .then(result => {
        console.log(result);
        this.ActiviteitenPlanningService.saveActiviteitPlanning(result, activiteitenMaakPlanning.actid);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openFormUpdateActiviteit(activiteit: Activiteit) {
    const modal = this.modalService.open(FormActiviteitComponent);
    modal.componentInstance.activiteit = activiteit;
    modal.result
      .then(result => {
        this.activiteitenService.updateActiviteit(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openFormSaveActiviteit(activiteit?: CreateActiviteit) {
    const modal = this.modalService.open(FormActiviteitComponent);
    if (activiteit) {
      modal.componentInstance.activiteit = activiteit;
    }
    modal.result
      .then(result => {
        this.activiteitenService.saveActiviteit(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openFormDeleteActiviteit(activiteitId: number) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === "yes") {
          this.activiteitenService.deleteActiviteit(activiteitId);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }


}

const activiteiten: Activiteit[] = [];

function search(text: string, pipe: PipeTransform): Activiteit[] {
  return activiteiten.filter(activiteit => {
    const term = text.toLowerCase();
    return (
      activiteit.naam.toLowerCase().includes(term) ||
      pipe.transform(activiteit.beschrijving).includes(term)
    );
  });
}

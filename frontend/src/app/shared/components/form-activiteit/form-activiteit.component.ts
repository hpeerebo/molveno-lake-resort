import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { Activiteit } from "src/app/models/activiteit";

@Component({
  selector: "app-form-activiteit",
  templateUrl: "./form-activiteit.component.html",
  styleUrls: ["./form-activiteit.component.scss"]
})
export class FormActiviteitComponent implements OnInit {
  @Input() activiteit: Activiteit | undefined = undefined;

  public activiteitForm = this.formBuilder.group({
    actid: [0],
    naam: ["", Validators.required],
    beschrijving: ["", Validators.required],
    thumb: [""]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log("ngOninit form activiteit component");
    if (this.activiteit) {
      this.activiteitForm.setValue({
        actid: this.activiteit.actid,
        naam: this.activiteit.naam,
        beschrijving: this.activiteit.beschrijving,
        thumb: this.activiteit.thumb
      });
    }
  }

  submitForm() {
    this.activeModal.close(this.activiteitForm.value);
  }
  get naam() {
    return this.activiteitForm.get("naam");
  }
  get beschrijving() {
    return this.activiteitForm.get("beschrijving");
  }
  get thumb() {
    return this.activiteitForm.get("thumb");
  }
}

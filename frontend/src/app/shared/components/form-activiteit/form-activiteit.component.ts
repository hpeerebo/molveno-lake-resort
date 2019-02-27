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
    naam: ["", Validators.required],
    beschrijving: ["", Validators.required],
    datum: ["", Validators.required],
    capaciteit: [0, [Validators.required, Validators.min(0)]],
    prijs: [0, [Validators.required, Validators.min(0)]],
    thumb: [""]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.activiteit) {
      this.activiteitForm.setValue({
        naam: this.activiteit.naam,
        beschrijving: this.activiteit.beschrijving,
        datum: this.activiteit.datum,
        capaciteit: this.activiteit.capaciteit,
        prijs: this.activiteit.prijs,
        thumb: this.activiteit.thumb,
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
  get datum() {
    return this.activiteitForm.get("datum");
  }
  get capaciteit() {
    return this.activiteitForm.get("capaciteit");
  }
  get prijs() {
    return this.activiteitForm.get("prijs");
  }
  get thumb() {
    return this.activiteitForm.get("thumb");
  }
}

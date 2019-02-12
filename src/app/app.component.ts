import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = Car.manufacturer;
  subTitle = 'Dit is een h2';
  link1 = 'Tour of Heroes!!!!';
  condintion = false;
  public myInput: string = "test";

  // show content of page
  handleButtonClick() {
    this.toggle();
    this.submitForm();
  }

  private toggle(){
    this.condintion =  !this.condintion;
  }

  private submitForm() {

  }
}

class Car {
  wheels: number = 4;
  static manufacturer: string = "Volkswagen";

  drive() {
    console.log("car from" + Car.manufacturer + " is driving")
  }
}

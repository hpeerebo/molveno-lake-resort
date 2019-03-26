import { Component, OnInit } from '@angular/core';
import { GastKamerReservering } from '../../models/gast-kamerreservering';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GastKamerReserveringFormGroup } from './gast-kamerreserveringformgroup';
import { Kamer } from 'src/app/models/kamer'
import { RoomService } from 'src/app/services/rooms.service';
import { Observable, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gast-kamerreservering',
  templateUrl: './gast-kamerreservering.component.html',
  styleUrls: ['./gast-kamerreservering.component.scss']
})
export class GastKamerReserveringComponent implements OnInit {
  public temp: any = this.datepipe.transform(new Date(), "yyyy-MM-dd");
  public tempresnum: any = this.datepipe.transform(new Date(), "yyyyMMddhhmmss");
  public today = new Date(new Date(this.temp).getTime())
  public tomorrow: Date = new Date();
  public aantalpersonenarray: Array<number> = [1,2,3,4,5,6,7,8];
  public reserveringsnummer = `MO-${this.tempresnum}-1`;
  
  public kamersgereserveerd: Array<string> = [];
  public gastkamerreservering: GastKamerReservering | undefined = undefined;
  public reservationroom1: GastKamerReservering | undefined = undefined;
  public reservationroom2: GastKamerReservering | undefined = undefined;
  public reservationlist: Array<GastKamerReservering> | undefined = undefined;; 

  public kamerreserveringForm = new GastKamerReserveringFormGroup();
  
  public showroom2: boolean = false;
  public showselectpeople: boolean = false;
  public showselectroom: boolean = false;
  public showfillinfo: boolean = false;
  
  public room1selected: boolean = false;
  public room2selected: boolean = false;

  public personen1: string = ''
  public personen2: string = ''

  public room1: any | undefined = undefined;
  public room2: any | undefined = undefined;

  public room1Array: Array<Kamer> = [];
  public room2Array: Array<Kamer> = [];

  public arrivedate: Date = new Date();
  public leavedate: Date = new Date();

  public minarrivedate: any = '';
  public minleavedate: any = '';

  public arrivedatecheck: boolean = true;
  public leavedatecheck: boolean = true;
  public aantalnachten: number = 1;

  public roomprice1: number = 0;
  public roomprice2: number = 0;
  public totalprice: number = 0;

  constructor(public activeModal: NgbActiveModal, private roomservice: RoomService, private datepipe: DatePipe) {}

  // showRoomsByDateAndCapacity(datumvan: Date, datumtot: Date, capacity: number){
  //   return this.roomservice.searchRoomByDateAndCapacity(datumvan, datumtot, capacity).subscribe();
  // };

  public roomsForTwo: Observable<Kamer[] | undefined> | undefined = undefined;
  public roomsForThree: Observable<Kamer[] | undefined> | undefined = undefined;
  public roomsForFour: Observable<Kamer[] | undefined> | undefined = undefined;

  private subscription: Subscription = new Subscription();

  ngOnInit() {


    // Remember: Lodash <======================================
    this.tomorrow.setDate(this.today.getDate() + 1)
    
    this.minarrivedate = this.datepipe.transform(this.today, "yyyy-MM-dd")
    this.minleavedate = this.datepipe.transform(this.tomorrow, "yyyy-MM-dd")

    this.aantalnachten = new Date(this.minleavedate).getDate() - new Date(this.minarrivedate).getDate()

    this.kamerreserveringForm.controls.datumvan.setValue(this.minarrivedate);
    this.kamerreserveringForm.controls.datumtot.setValue(this.minleavedate);

    if (this.gastkamerreservering) {
      this.kamerreserveringForm.setValue({
        voornaam: this.gastkamerreservering.voornaam,
        achternaam: this.gastkamerreservering.achternaam,
        telefoonnummer: this.gastkamerreservering.telefoonnummer,
        emailadres: this.gastkamerreservering.emailadres,
        identiteitsid: this.gastkamerreservering.identiteitsid,
        aantalpersonen: this.gastkamerreservering.aantalpersonen,
        postcode: this.gastkamerreservering.postcode,
        straat: this.gastkamerreservering.straat,
        huisnummer: this.gastkamerreservering.huisnummer,
        woonplaats: this.gastkamerreservering.woonplaats,
        land: this.gastkamerreservering.land,
        datumvan: this.gastkamerreservering.datumvan,
        datumtot: this.gastkamerreservering.datumtot,
        kamernaam: this.gastkamerreservering.kamernaam,
        inchecken: this.gastkamerreservering.inchecken,
        uitchecken: this.gastkamerreservering.uitchecken,
        personen: this.gastkamerreservering.personen,
        prijs: this.gastkamerreservering.prijs,
        reserveringsnummer: this.gastkamerreservering.reserveringsnummer
      });
    }
  }

  datumvanChanged(datumvan: string, datumtot: string) {
    this.arrivedatecheck = true;
    this.leavedatecheck = true;
    this.arrivedate = new Date(new Date(datumvan).getTime());
    this.leavedate = new Date(new Date(datumtot).getTime());

    if(this.arrivedate < this.today) {
      this.kamerreserveringForm.controls.datumvan.setValue(this.datepipe.transform(this.today, "yyyy-MM-dd"));
      this.arrivedatecheck = false;
    }
    
    let arrivedateString: string = datumvan
    let leavedateString: string = datumtot

    if(this.leavedate <= this.arrivedate) {
      this.minleavedate = new Date(new Date(this.arrivedate).getTime() + (1000 * 60 * 60 * 24) )
      this.kamerreserveringForm.controls.datumtot.setValue(this.datepipe.transform(this.minleavedate, "yyyy-MM-dd"));
      this.leavedate = new Date(new Date(this.kamerreserveringForm.controls.datumtot.value).getTime());
      leavedateString = this.minleavedate
    }


    if(datumtot && this.kamerreserveringForm.controls.aantalpersonen.value) {
      this.roomsForTwo = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 2);
      this.roomsForThree = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 3);
      this.roomsForFour = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 4);
      this.showselectpeople = true;
    }

    this.aantalnachten = (new Date(this.leavedate).getTime() - new Date(this.arrivedate).getTime())/(1000 * 60 * 60 * 24)
    this.totalprice = (this.roomprice1 + this.roomprice2) * this.aantalnachten

  }

  datumtotChanged(datumvan: string, datumtot: string) {
    this.arrivedatecheck = true;
    this.leavedatecheck = true;
    this.arrivedate = new Date(new Date(datumvan).getTime());
    this.leavedate = new Date(new Date(datumtot).getTime());

    let arrivedateString: string = datumvan
    let leavedateString: string = datumtot

    if(this.leavedate <= this.arrivedate) {
      this.minleavedate = new Date(new Date(this.arrivedate).getTime() + (1000 * 60 * 60 * 24) )
      this.kamerreserveringForm.controls.datumtot.setValue(this.datepipe.transform(this.minleavedate, "yyyy-MM-dd"));
      this.leavedate = this.minleavedate;
      leavedateString = this.kamerreserveringForm.controls.datumtot.value
      this.leavedatecheck = false;
    }

    if(datumvan && this.kamerreserveringForm.controls.aantalpersonen.value) {
      this.roomsForTwo = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 2);
      this.roomsForThree = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 3);
      this.roomsForFour = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 4);
      this.showselectpeople = true;
    }

    this.aantalnachten = (new Date(this.leavedate).getTime() - new Date(this.arrivedate).getTime())/(1000 * 60 * 60 * 24)
    this.totalprice = (this.roomprice1 + this.roomprice2) * this.aantalnachten
  }

  aantalPersonenChanged(aantalpersonen: string) {

    if(this.kamerreserveringForm.controls.datumvan.value && this.kamerreserveringForm.controls.datumtot.value) {
      this.showselectroom = true;

      if(this.room2selected === false) {
        this.showfillinfo = false;
      }

      let arrivedateString: string = this.kamerreserveringForm.controls.datumvan.value
      let leavedateString: string = this.kamerreserveringForm.controls.datumtot.value

      this.totalprice = (this.roomprice1 + this.roomprice2) * this.aantalnachten
      this.roomsForTwo = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 2);
      this.roomsForThree = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 3);
      this.roomsForFour = this.roomservice.searchRoomByDateAndCapacity(arrivedateString, leavedateString, 4);
    
      switch (aantalpersonen) {
        case '1': {
          this.room1Array = []
          this.roomsForTwo.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });
          this.showroom2 = false;
          this.personen1 = '2 pers. kamer';
          break;
        }
        case '2': {
          this.room1Array = []
          this.roomsForTwo.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });
          this.showroom2 = false;
          this.personen1 = '2 pers. kamer';
          break;
        }
        case '3': {
          this.room1Array = []
          this.roomsForThree.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });
          this.personen1 = '3 pers. kamer';
          this.showroom2 = false;
          break;
        }
        case '4': {
          this.room1Array = []
          this.roomsForFour.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });
          this.showroom2 = false;
          this.personen1 = '4 pers. kamer';
          break;
        }
        case '5': {
          this.room1Array = []
          this.roomsForTwo.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });

            this.room2Array = []
            this.roomsForThree.subscribe(
              response => { 
                this.room2 = response;
                
                let room2Budget: boolean = false;
                let room2Standaard: boolean = false;
                let room2Luxe: boolean = false;
  
                this.room2.forEach((element:any) => {
                  if(element.kamerType === 'Budget' && room2Budget === false) {
                    this.room2Array = [...this.room2Array, element]
                    room2Budget = true
                  }
                  if(element.kamerType === 'Standaard' && room2Standaard === false) {
                    this.room2Array = [...this.room2Array, element]
                    room2Standaard = true
                  }
                  if(element.kamerType === 'Luxe' && room2Luxe === false) {
                    this.room2Array = [...this.room2Array, element]
                    room2Luxe = true
                  }
                });
              });
            this.showroom2 = true;
          this.personen1 = '2 personen';
          this.personen2 = '3 personen';
          break;
        }
        case '6': {
          this.room1Array = []
          this.roomsForThree.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });
            this.room2Array = []
            this.roomsForThree.subscribe(
              response => { 
                this.room2 = response;
                  
                let room2Budget: boolean = false;
                let room2Standaard: boolean = false;
                let room2Luxe: boolean = false;
                let room2BudgetSecond: boolean = false;
                let room2StandaardSecond: boolean = false;
                let room2LuxeSecond: boolean = false; 
  
                this.room2.forEach((element:any) => {
                  if(element.kamerType === 'Budget' && room2Budget === false && room2BudgetSecond === true) {
                    this.room2Array = [...this.room2Array, element];
                    room2Budget = true;
                  }
                  if(element.kamerType === 'Budget' && room2Budget === false && room2BudgetSecond === false) {
                    room2BudgetSecond = true;
                  }
                  if(element.kamerType === 'Standaard' && room2Standaard === false && room2StandaardSecond === true) {
                    this.room2Array = [...this.room2Array, element]
                    room2Standaard = true
                  }
                  if(element.kamerType === 'Standaard' && room2Standaard === false && room2StandaardSecond === false) {
                    room2StandaardSecond = true;
                  }
                  if(element.kamerType === 'Luxe' && room2Luxe === false && room2LuxeSecond === true) {
                    this.room2Array = [...this.room2Array, element]
                    room2Luxe = true
                  }
                  if(element.kamerType === 'Luxe' && room2Luxe === false && room2LuxeSecond === false) {
                    room2LuxeSecond = true;
                  }
                });
              });
            this.showroom2 = true;
          this.personen1 = '3 personon';
          this.personen2 = '3 personon';
          break;
        }
        case '7': {
          this.room1Array = []
          this.roomsForThree.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });

            this.room2Array = []
            this.roomsForFour.subscribe(
              response => { 
                this.room2 = response;
                
                let room2Budget: boolean = false;
                let room2Standaard: boolean = false;
                let room2Luxe: boolean = false;
  
                this.room2.forEach((element:any) => {
                  if(element.kamerType === 'Budget' && room2Budget === false) {
                    this.room2Array = [...this.room2Array, element]
                    room2Budget = true
                  }
                  if(element.kamerType === 'Standaard' && room2Standaard === false) {
                    this.room2Array = [...this.room2Array, element]
                    room2Standaard = true
                  }
                  if(element.kamerType === 'Luxe' && room2Luxe === false) {
                    this.room2Array = [...this.room2Array, element]
                    room2Luxe = true
                  }
                });
              });
            this.showroom2 = true;
          this.personen1 = '3 personon';
          this.personen2 = '4 personon';
          break;
        }
        case '8': {
          this.room1Array = []
          this.roomsForFour.subscribe(
            response => { 
              this.room1 = response;
              
              let room1Budget: boolean = false;
              let room1Standaard: boolean = false;
              let room1Luxe: boolean = false;

              this.room1.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room1Budget === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Budget = true
                }
                if(element.kamerType === 'Standaard' && room1Standaard === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Standaard = true
                }
                if(element.kamerType === 'Luxe' && room1Luxe === false) {
                  this.room1Array = [...this.room1Array, element]
                  room1Luxe = true
                }
              });
            });

          this.room2Array = []
          this.roomsForFour.subscribe(
            response => { 
              this.room2 = response;
                
              let room2Budget: boolean = false;
              let room2Standaard: boolean = false;
              let room2Luxe: boolean = false;
              let room2BudgetSecond: boolean = false;
              let room2StandaardSecond: boolean = false;
              let room2LuxeSecond: boolean = false; 

              this.room2.forEach((element:any) => {
                if(element.kamerType === 'Budget' && room2Budget === false && room2BudgetSecond === true) {
                  this.room2Array = [...this.room2Array, element];
                  room2Budget = true;
                }
                if(element.kamerType === 'Budget' && room2Budget === false && room2BudgetSecond === false) {
                  room2BudgetSecond = true;
                }
                if(element.kamerType === 'Standaard' && room2Standaard === false && room2StandaardSecond === true) {
                  this.room2Array = [...this.room2Array, element]
                  room2Standaard = true
                }
                if(element.kamerType === 'Standaard' && room2Standaard === false && room2StandaardSecond === false) {
                  room2StandaardSecond = true;
                }
                if(element.kamerType === 'Luxe' && room2Luxe === false && room2LuxeSecond === true) {
                  this.room2Array = [...this.room2Array, element]
                  room2Luxe = true
                }
                if(element.kamerType === 'Luxe' && room2Luxe === false && room2LuxeSecond === false) {
                  room2LuxeSecond = true;
                }
              });
            });
          this.showroom2 = true;
          this.personen1 = '4 personon';
          this.personen2 = '4 personon';
          break;
        }
        default: {
          this.showroom2 = false;
          break;
        }
      }
    } else {
      this.showselectroom = false;
    }
  }

  room1Selected(selectedroom: string, aantal: number,) {
    this.roomprice1 = +selectedroom.split(',')[1];

    this.room1selected = true;
    this.showfillinfo = false;
    if(aantal > 4 && this.room2selected && selectedroom) {
      this.showfillinfo = true;
    } else {
      this.showfillinfo = false;
    }
    if(aantal < 5) {
      this.showfillinfo = true;
    }
    this.totalprice = (this.roomprice1 + this.roomprice2) * this.aantalnachten
  }


  room2Selected(selectedroom: string, aantal: number) {
    this.roomprice2 = +selectedroom.split(',')[1];

    this.room2selected = true;
    if(this.room1selected && selectedroom) {
      this.showfillinfo = true;
    } else {
      this.showfillinfo = false;
    }
    this.totalprice = (this.roomprice1 + this.roomprice2) * this.aantalnachten
  }

  submitForm(kamer1: any, kamer2: any) {
    if(this.kamerreserveringForm.value.aantalpersonen < 5) {
      kamer2 = ''
    }
    this.kamersgereserveerd = [kamer1, kamer2] // Never used!!!
    this.reservationroom1 = new GastKamerReservering(
      this.kamerreserveringForm.value.id,
      this.kamerreserveringForm.value.voornaam,
      this.kamerreserveringForm.value.achternaam,
      this.kamerreserveringForm.value.telefoonnummer,
      this.kamerreserveringForm.value.emailadres,
      this.kamerreserveringForm.value.identiteitsid,
      this.kamerreserveringForm.value.aantalpersonen,
      this.kamerreserveringForm.value.postcode,
      this.kamerreserveringForm.value.straat,
      this.kamerreserveringForm.value.huisnummer,
      this.kamerreserveringForm.value.woonplaats,
      this.kamerreserveringForm.value.land,
      this.kamerreserveringForm.value.datumvan,
      this.kamerreserveringForm.value.datumtot,
      kamer1.split(',')[0],
      this.kamerreserveringForm.value.inchecken,
      this.kamerreserveringForm.value.uitchecken,
      this.kamerreserveringForm.value.aantalpersonen,
      kamer1.split(',')[1],
      this.reserveringsnummer
    )

    if (kamer2 !== '') {
      this.reservationroom2 = new GastKamerReservering(
        this.kamerreserveringForm.value.id,
        this.kamerreserveringForm.value.voornaam,
        this.kamerreserveringForm.value.achternaam,
        this.kamerreserveringForm.value.telefoonnummer,
        this.kamerreserveringForm.value.emailadres,
        this.kamerreserveringForm.value.identiteitsid,
        this.kamerreserveringForm.value.aantalpersonen,
        this.kamerreserveringForm.value.postcode,
        this.kamerreserveringForm.value.straat,
        this.kamerreserveringForm.value.huisnummer,
        this.kamerreserveringForm.value.woonplaats,
        this.kamerreserveringForm.value.land,
        this.kamerreserveringForm.value.datumvan,
        this.kamerreserveringForm.value.datumtot,
        kamer2.split(',')[0],
        this.kamerreserveringForm.value.inchecken,
        this.kamerreserveringForm.value.uitchecken,
        this.kamerreserveringForm.value.aantalpersonen,
        kamer1.split(',')[1],
        this.reserveringsnummer
      )
      this.reservationlist = [this.reservationroom1, this.reservationroom2]
    } else {
      this.reservationlist = [this.reservationroom1]
    }

    this.activeModal.close(this.reservationlist);
    location.reload();
  }
}

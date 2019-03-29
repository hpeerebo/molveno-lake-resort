export class DateFunctions {

  getCurrentDate(): string {
    const currentDate: Date = new Date();
    let today: string = "";
    let dd: any = currentDate.getDate();
    let mm: any = currentDate.getMonth() + 1;
    let yyyy: any = currentDate.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }
    today = (yyyy + '-' + mm + '-' + dd);
    return today;
  }

  getCurrentDateTime(): string {
    const currentDate: Date = new Date();
    let today: string = "";
    let dd: any = currentDate.getDate();
    let mm: any = currentDate.getMonth() + 1;
    let yyyy: any = currentDate.getFullYear();
    let hh: any = currentDate.getHours();
    let min: any = currentDate.getMinutes();
    let ss: any = currentDate.getSeconds();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }
    today = (`${yyyy}${mm}${dd}${hh}${min}${ss}`);
    return today;
  }

  calculateNumberofDays(datumvan: string, datumtot: string) {
    let numberOfDays = (new Date(datumtot).getTime() - new Date(datumvan).getTime()) / (1000 * 60 * 60 * 24);
    if (numberOfDays === 0) {
      numberOfDays = 1;
    }
    return numberOfDays;
  }
}

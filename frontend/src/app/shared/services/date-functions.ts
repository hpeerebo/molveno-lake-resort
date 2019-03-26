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
}

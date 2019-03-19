export class PickerHelper {

  public static dateObject(date: Date): IDateObject {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  public static timeObject(date: Date): ITimeObject {
    return {
      hour: date.getHours(),
      minute: date.getMinutes()
    };
  }

  public static toDate(dateObject: IDateObject, timeObject: ITimeObject): Date {
    return new Date(dateObject.year, dateObject.month - 1, dateObject.day, timeObject.hour, timeObject.minute);
  }
}

interface IDateObject {
  year: number;
  month: number;
  day: number;
}

interface ITimeObject {
  hour: number;
  minute: number;
}

import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortgrid",
  pure: true
})
@Injectable()
export class SortgridPipe implements PipeTransform {
  transform(array: any, field: string): any {
    if (!Array.isArray(array)) {
      return;
    }

    array.sort((a: any, b: any) => {
      if (isNaN(+a[field]) || isNaN(+b[field])) {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (+a[field] < +b[field]) {
          return -1;
        } else if (+a[field] > +b[field]) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return array;
  }
}

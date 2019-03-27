import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortgrid",
  pure: true
})
@Injectable()
export class SortgridPipe implements PipeTransform {
  transform(array: any, columnTitle: string): any {
    if (!Array.isArray(array)) {
      return;
    }

    array.sort((a: any, b: any) => {
      if (isNaN(+a[columnTitle]) || isNaN(+b[columnTitle])) {
        return a[columnTitle] < b[columnTitle] ? -1 : a[columnTitle] > b[columnTitle] ? 1 : 0;
      } else {
        return +a[columnTitle] < +b[columnTitle] ? -1 : +a[columnTitle] > +b[columnTitle] ? 1 : 0;
      }
    });
    return array;
  }
}

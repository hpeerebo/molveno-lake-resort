import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], filterFn: (item: any) => any, filterIsActive: boolean = true): any {
    return filterIsActive ? values.filter(filterFn) : values;
}

}

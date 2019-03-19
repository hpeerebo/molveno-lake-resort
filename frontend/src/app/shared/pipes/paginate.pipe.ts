import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(values: any[], page: number, pageSize: number, sortColumn: string, sortDirection: string): any[] {
    return this.sort(values, sortColumn, sortDirection).slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
  }

  sort(values: any[], column: string, direction: string): any[] {
    if (direction === '') {
      return values;
    } else {
      return [...values].sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  compare(v1: any, v2: any) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class SortGridService {

  columnTitle: string = "";
  public columnSortClickHandler(event: string): string {
    this.columnTitle = event;
    return this.columnTitle;
  }

  constructor() {}
}

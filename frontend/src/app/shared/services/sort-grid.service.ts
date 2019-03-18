import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class SortGridService {

  field: string = "";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return console.log(this.field), this.field;
  }

  constructor() {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frontend-rounded-circle-item',
  templateUrl: './rounded-circle.component.html',
  styleUrls: ['./rounded-circle.component.scss']
})
export class RoundedCircleComponent implements OnInit {
  @Input() public roomdetail = {};
  @Input() public siteLanguage: any | undefined = undefined;

  constructor() {}

  ngOnInit() {}

}

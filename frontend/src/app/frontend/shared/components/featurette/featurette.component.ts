import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frontend-featurette-item',
  templateUrl: './featurette.component.html',
  styleUrls: ['./featurette.component.scss']
})
export class FeaturetteComponent implements OnInit {
  @Input() public roomdetail: any;
  
  constructor() { }

  ngOnInit() {
  }

}

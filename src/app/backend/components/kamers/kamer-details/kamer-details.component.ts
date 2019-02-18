import { Component, OnInit, Input } from '@angular/core';
import { Kamer } from '../kamer';

@Component({
  selector: 'app-kamer-details',
  templateUrl: './kamer-details.component.html',
  styleUrls: ['./kamer-details.component.scss']
})
export class KamerDetailsComponent implements OnInit {
  @Input() kamer: Kamer | undefined;
  constructor() { }

  ngOnInit() {
  }

}

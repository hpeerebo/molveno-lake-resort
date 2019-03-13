import { Component } from '@angular/core';

@Component({
  selector: 'frontend-root',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontEndComponent {
  ngOnInit() {
    console.log('tetst');
  }
}

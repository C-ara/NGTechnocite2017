import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-item2',
  templateUrl: './user-item2.component.html',
  styleUrls: ['./user-item2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserItem2Component implements OnInit {
@Input() name: string;
  constructor() {
    this.name = 'Gilles';
   }

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-registerbtn',
  templateUrl: './registerbtn.component.html',
  styleUrls: ['./registerbtn.component.css']
})
export class RegisterbtnComponent {

  @Input() btnText: string = '';

  // @Output() onBtnClick=new EventEmitter<any>();

  // btnClick() {

  // }
}

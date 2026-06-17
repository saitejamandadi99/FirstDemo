import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-directive-demo',
  imports: [NgIf, NgFor],
  templateUrl: './directive-demo.html',
  styleUrl: './directive-demo.css',
})
export class DirectiveDemo {
  isValid : boolean =true;
  lstNum =[1,2,3,4,5];
  toggleValid():void{
    alert('isValid' + this.isValid);
    this.isValid = !this.isValid;
  }
}

import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { DemoUser } from '../models/DemoUser';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-register-demo-user',
  imports: [FormsModule, NgIf],
  templateUrl: './register-demo-user.html',
  styleUrl: './register-demo-user.css',
})
export class RegisterDemoUser {
  demoUser : DemoUser = {username:'', userPassword:'', confirmPassword:''}
  registerDemoUser(){
    console.log(this.demoUser.username);
    console.log(this.demoUser.userPassword);
  }
}

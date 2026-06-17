import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IGenre } from '../models/genre-interface';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-add-genre-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-genre-component.html',
  styleUrl: './add-genre-component.css',
})
export class AddGenreComponent {
  genre :IGenre ={genreId:0,genreCode:'',genreDesc:''}
  genreForm : FormGroup = new FormGroup({
    genreId:new FormControl(),
    genreCode:new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(5)]),
    genreDesc:new FormControl('',Validators.minLength(5)),
  });

  onSubmit(){
    alert('Hi');
    console.log('In onSubmit()');
    console.log(this.genreForm.value);
    console.log(this.genreForm.controls['genreCode'].value);
    console.log(this.genreForm.controls['genreDesc'].value);
  }

  get genreDesc():FormControl{
    return this.genreForm.get('genreDesc') as FormControl;
  }
}

import { Component } from '@angular/core';
import { IMovie } from '../models/movie-interface';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { retry } from 'rxjs';
@Component({
  selector: 'app-add-movie-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-movie-component.html',
  styleUrl: './add-movie-component.css',
})
export class AddMovieComponent {

   releaseMovieValiator(control:AbstractControl): ValidationErrors|null{ //abstract control is the parent class for the form controll form group and form array
    if(!control.value){ //validationErrors tell  you which validation failed. and also the return type of validation 
      return null; //return null means no error / valid 
    }

    let year = new Date(control.value).getFullYear(); 
    if(year >= 1960){
      return null;
    }
    return {invalidReleaseYear : true};
  }


  movie : IMovie ={movieId:0,movieName:'',movieRating:0,releaseDate:new Date(), genreId:0};
  movieForm :FormGroup = new FormGroup({
    movieId: new FormControl(),
    movieName : new FormControl('',[Validators.minLength(4), Validators.maxLength(10)]),
    movieRating : new FormControl(0, [Validators.min(0), Validators.max(10)]),
    releaseDate: new FormControl('', [this.releaseMovieValiator]),
    genreId: new FormControl(0)
  });

 

  onSubmit(){
    alert("Movie values are updating");
    console.log(this.movieForm.value);
    console.log(this.movieForm.controls['movieId'].value);
    console.log(this.movieForm.controls['movieName'].value);
    console.log(this.movieForm.controls['movieRating'].value);
    console.log(this.movieForm.controls['releaseDate'].value);
    console.log(this.movieForm.controls['genreId'].value);
  }

  get movieId() : FormControl{
    return this.movieForm.get('movieId') as FormControl;
  }

   get movieName() : FormControl{
    return this.movieForm.get('movieName') as FormControl;
  }

   get movieRating() : FormControl{
    return this.movieForm.get('movieRating') as FormControl;
  }

   get releaseDate() : FormControl{
    return this.movieForm.get('releaseDate') as FormControl;
  }

   get genreId() : FormControl{
    return this.movieForm.get('genreId') as FormControl;
  }
}

import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { IMovie } from '../models/movie-interface';
import { NgForOf } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { AppHighlight } from '../app-highlight';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-movie-demo',
  imports: [NgForOf, NgClass, NgStyle, AppHighlight, DatePipe],
  templateUrl: './movie-demo.html',
  styleUrl: './movie-demo.css',
})
export class MovieDemo {
  lstIMovie : IMovie[];
  lstMovie: Movie[];
  constructor(){
    this.lstIMovie=[{movieId:1, movieName:"SpiderMan", movieRating:9, genreId:5},
      {movieId:2, movieName:"Avengers", movieRating:9, genreId:5},
      {movieId:3, movieName:"Titanic", movieRating:9, genreId:3},
      {movieId:4, movieName:"Troy", movieRating:7, genreId:2},
      {movieId:5, movieName:"SouthPaw", movieRating:6, genreId:3}
    ]

    this.lstMovie=[{movieId:1, movieName:"SpiderMan", movieRating:9, genreId:5, releaseDate: new Date("25-02-2000"), movieEarnings: 2000},
      {movieId:2, movieName:"Avengers", movieRating:2, genreId:5, releaseDate: new Date("02-02-2020"), movieEarnings: 2000},
      {movieId:3, movieName:"Titanic", movieRating:2, genreId:3, releaseDate: new Date("14-05-2003"), movieEarnings: 2000},
      {movieId:4, movieName:"Troy", movieRating:7, genreId:2, releaseDate: new Date("15-02-2000"), movieEarnings: 2000},
      {movieId:5, movieName:"SouthPaw", movieRating:6, genreId:3, releaseDate: new Date("25-07-2007"), movieEarnings: 2000}
    ]
  }
}

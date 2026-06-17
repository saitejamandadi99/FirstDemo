import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Movie } from '../models/movie';
import { TaxPipelinePipe } from '../tax-pipeline-pipe';
@Component({
  selector: 'app-pipe-demo',
  imports: [DatePipe, TaxPipelinePipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  myDate = new Date();

  movie :Movie ={
    movieId: 1,
    movieName:'Don',
    genreId:3,
    movieRating:6,
    releaseDate : new Date("20-02-2000"),
    movieEarnings:20000
  }
}

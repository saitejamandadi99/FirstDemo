import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GenreDemo } from './genre-demo/genre-demo';
import { DirectiveDemo } from './directive-demo/directive-demo';
import { ViewDemoWorks } from './view-demo-works/view-demo-works';
import { MovieDemo } from './movie-demo/movie-demo';
import { PipeDemo } from './pipe-demo/pipe-demo';
import { RegisterDemoUser } from './register-demo-user/register-demo-user';
import { AddGenreComponent } from './add-genre-component/add-genre-component';
import { AddMovieComponent } from './add-movie-component/add-movie-component';
import { ErrorDemoComponent } from './error-demo-component/error-demo-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GenreDemo,RouterLink,RouterLinkActive, DirectiveDemo, ViewDemoWorks, MovieDemo, PipeDemo,RegisterDemoUser, AddGenreComponent, AddMovieComponent, ErrorDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FirstDemo');
}

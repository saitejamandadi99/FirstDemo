import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenreDemo } from './genre-demo/genre-demo';
import { DirectiveDemo } from './directive-demo/directive-demo';
import { ViewDemoWorks } from './view-demo-works/view-demo-works';
import { MovieDemo } from './movie-demo/movie-demo';
import { PipeDemo } from './pipe-demo/pipe-demo';
import { RegisterDemoUser } from './register-demo-user/register-demo-user';
import { AddGenreComponent } from './add-genre-component/add-genre-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GenreDemo, DirectiveDemo, ViewDemoWorks, MovieDemo, PipeDemo,RegisterDemoUser, AddGenreComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FirstDemo');
}

import { Routes } from '@angular/router';
import { GenreDemo } from './genre-demo/genre-demo';
import { DirectiveDemo } from './directive-demo/directive-demo';
import { PipeDemo } from './pipe-demo/pipe-demo';
import { AddMovieComponent } from './add-movie-component/add-movie-component';
import { AddGenreComponent } from './add-genre-component/add-genre-component';
import { ViewDemoWorks } from './view-demo-works/view-demo-works';
import { ErrorDemoComponent } from './error-demo-component/error-demo-component';


export const routes: Routes = [
    {path:'', component:GenreDemo},
    {path:'genredemo', component:GenreDemo},
    {path:'directivedemo', component:DirectiveDemo},
    {path:'pipedemo', component:PipeDemo},
    {path:'addmovie', component:AddMovieComponent},
    {path:'addgenre', component:AddGenreComponent},
    {path:'viewdemo', component:ViewDemoWorks},
    {path:'**', component:ErrorDemoComponent},
];

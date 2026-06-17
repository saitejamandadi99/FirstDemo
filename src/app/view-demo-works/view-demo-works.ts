import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { IGenre } from '../models/genre-interface';
import { GenreDemo } from '../genre-demo/genre-demo';
@Component({
  selector: 'app-view-demo-works',
  imports: [NgForOf, GenreDemo],
  templateUrl: './view-demo-works.html',
  styleUrl: './view-demo-works.css',
})
export class ViewDemoWorks implements OnInit {
  //declare a list of genre;
  lstGenre: IGenre[];
  //this value is bound the child property genreProperty
  parentGenre : IGenre={genreId:0, genreCode:'', genreDesc:''}
  sendInput : string = 'hello from parent'
  dataFromChild : string = '';
  constructor(){
    this.lstGenre = [{genreId: 1, genreCode: "ROM", genreDesc: "Romance"},{genreId: 2, genreCode: "HIST", genreDesc: "Historical"},
      {genreId: 3, genreCode: "AUTO", genreDesc: "Autobiography"},{genreId: 4, genreCode: "ADV", genreDesc: "Adventure"}
    ]
  }
  
  

  ngOnInit(): void {
     this.parentGenre = this.lstGenre[1];

  }
  onClickSendGenreId(index : any){
    this.parentGenre = this.lstGenre[index];
  }

  getDataFromChild(event:any){
    this.dataFromChild = event;
  }
}

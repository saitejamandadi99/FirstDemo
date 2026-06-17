import { Component, EventEmitter, Input, input, OnInit, Output, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { Genre } from '../models/Genre';
import { IGenre } from '../models/genre-interface';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { config } from 'rxjs';
@Component({
  selector: 'app-genre-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './genre-demo.html',
  // template:`
  //   <h1>Testing the template </h1>
  // `,
  styleUrl: './genre-demo.css',
  //styles:`p{color: red;}`
})
export class GenreDemo implements OnChanges, OnInit, AfterContentChecked, AfterContentInit, AfterViewInit {
  //declare few variables with values 
  GenreId : number = 1;
  GenreCode : string = "Sci-Fi";
  GenreDesc : string = "Science Fiction";

  myClass :string = "bgAqua";
  bgApplyClass:boolean = true;

  //create a object of the genre class and initialzie with values 
  genreObj : Genre = new Genre();

  gerneInterface : IGenre={
    genreId:3,
    genreCode:"ROM-COM",
    genreDesc: "Romance Comedy"
  }

  constructor(){
    console.log("in the constructor");
  }


  //invoked when the parent calls @Input
  ngOnChanges() : void{
    console.log('on changes invoked');
    
  }

  //ngoninit method to initialize the values 

  ngOnInit() : void{ //runs after the constructor . 
    this.setGenreDetails();
    console.log("inside the on init ");
    
  }

  //runs when the component checks for the changes 
  ngDoCheck():void{
    console.log("In do check");
    
  }

  //runs once the content is initialized 
  ngAfterContentInit():void{
    console.log("In content In it");
    
  }

  //runs every time this component content has been checked for changes 
  ngAfterContentChecked() : void{
    console.log("In Content checked hook")
  }

  //Runs once after the components view has been initialized.
  ngAfterViewInit():void{
    console.log("in after view init hook");
    
  }

  //runs every time component view has been check of changes 
  ngAfterViewChecked():void{
    console.log("in view checked hook")
  }

  //runs ones before the component is destroyed
  ngOnDestroy():void{
    console.log("In destroy hook view");
    
  }
//used for populating the values 
  setGenreDetails():void{
    this.genreObj.genreId = 2;
    this.genreObj.genreCode = "ACT";
    this.genreObj.genreDesc = "Action";
  }


  GetGenreDetails() : string{
    return `Genre Id: ${this.GenreId}, Genre Code : ${this.GenreCode}, Genre Desc : ${this.GenreDesc}`
  }

  OnClick() : void{
    alert("Button has been clicked");
    console.log("Button has been click");
    
  }
  changeValue(event: any) : void{
    console.log(event.target.value);
    
  }

  //this value will come from parent - view genre component
  @Input() genreProperty : Genre={genreId:0,genreCode:'',genreDesc:''};
  private _data : string ='';
  
    // set data(value:string){
    //   this._data = value.toUpperCase();
    // }
    // get data():string{
    //   return this._data;
    // }

  //sending the details from child to parent using output 
  @Output() childOutputEvent : EventEmitter<string> = new EventEmitter<string>;

  sendToParent(): any{
    //emitting the event - data is sent to the parent 
    console.log("in the child sendToParent");
    this.childOutputEvent.emit("Hello from child");
  }
}

  
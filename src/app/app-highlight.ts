import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
})
export class AppHighlight {
  //used to get the data from the html element where the directive is applied 
  //@'Input' ('appHighlight') highlight color : string ='';
  constructor(private ele: ElementRef){}

  @HostListener('mouseenter')onMouseEnter(){
    //we want to hightlight the yellow color
    console.log(this.ele.nativeElement.style.backgroundColor = 'cyan'
    );
    
  }

  @HostListener('mouseleave') onMouseLeave(){
    //we want to remove the highlight
    this.ele.nativeElement.style.backgroundColor='';
  }
}

import { ElementRef, HostListener, Injectable, Input, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerHighlightService {


  @Input() isCorrect: boolean = false;



  constructor(private element : ElementRef, private render: Renderer2) {
  @HostListener('click') chooseRightAnswer(){
    if(this.correct) {
      this.render.setStyle(this.element.nativeElement, 'background', 'green');
      
    }
  }



   }
}

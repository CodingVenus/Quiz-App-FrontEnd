import { Directive, ElementRef,HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnswerHighlight]'
})



export class AnswerHighlightDirective {
@Input() corrrect: boolean = false;

  constructor(private element : ElementRef, private render: Renderer2) {}
    @HostListener('click') chooseRightAnswer(){
      if(this.correct) {
        this.render.setStyle(this.element.nativeElement, 'background', 'green');
        
      }
    }

}

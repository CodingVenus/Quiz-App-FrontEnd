import { Directive, ElementRef,HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnswerHighlight]'
})



export class AnswerHighlightDirective {
@Input() correct: boolean = false;

  constructor(private element : ElementRef, private render: Renderer2) {}
    
  @HostListener('click') chooseRightAnswer(){


      if(this.correct) {
        this.render.setStyle(this.element.nativeElement, 'background', 'green');
        this.render.setStyle(this.element.nativeElement,'border', '2px dark green');
        this.render.setStyle(this.element.nativeElement,'color', '#fff');

      } else {
        
      }
    }

}

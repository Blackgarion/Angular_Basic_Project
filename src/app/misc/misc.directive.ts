import {Directive, ElementRef} from '@angular/core';

@Directive({selector: '[boxHighLighter]'})
export class BoxHighlighterDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }
}

import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({selector: '[appResize]'})
export class ResizeDirective {
  private readonly INCREASED_WIDTH = '200px';
  private readonly INCREASED_HEIGHT = '200px';
  private readonly ORIGINAL_WIDTH = '150px';
  private readonly ORIGINAL_HEIGHT = '150px';

  constructor(public element: ElementRef, public renderer: Renderer) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover(false);
  }

  private hover(shouldResize: Boolean) {
    if (shouldResize) {
      this.resizeElement(this.INCREASED_WIDTH, this.INCREASED_HEIGHT);
    } else {
      this.resizeElement(this.ORIGINAL_WIDTH, this.ORIGINAL_HEIGHT);
    }
  }

  private resizeElement(width: string, height: string) {
    this.renderer.setElementStyle(this.element.nativeElement, 'width', width);
    this.renderer.setElementStyle(this.element.nativeElement, 'height', height);
  }
}

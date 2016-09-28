import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appmy-directive]'
})
export class MyDirectiveDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement,'backgroundColor','yellow')
    renderer.setElementStyle(el.nativeElement,'color','red')
   }

}

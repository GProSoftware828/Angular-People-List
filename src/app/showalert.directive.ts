import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';
@Directive({
  selector: '[showalert]'
})
export class ShowAlertDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'cursor', 'pointer');
    //var.nativeElement, stylename, value
    el.nativeElement.style.color = 'blue';

    renderer.listen(el.nativeElement, 'mouseover', function() {
      el.nativeElement.style.color = 'red';
      el.nativeElement.style.fontSize = '24pt';
    });

    renderer.listen(el.nativeElement, 'mouseout', function() {
      el.nativeElement.style.color = 'yellow';
      el.nativeElement.style.fontSize = '26pt';
    });

    renderer.listen(el.nativeElement, 'click', function() {
      alert('General announcement');
    });
  }
}

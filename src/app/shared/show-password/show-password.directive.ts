import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective {
  private element: HTMLElement;

  constructor($element: ElementRef,
              private renderer: Renderer2) {
    this.element = $element.nativeElement;
  }

  @Input() set showPasswordState(showPassword: boolean) {
    const type = showPassword ? 'text' : 'password';
    this.renderer.setAttribute(this.element, 'type', type);
    this.element.focus();
  }
}

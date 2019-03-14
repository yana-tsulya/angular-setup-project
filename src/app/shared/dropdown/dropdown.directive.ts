import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]',
})
export class DropdownDirective {
  @Input() dontHideOnBodyClick: boolean;

  private isOpen = false;
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.toggleOpenState(this.isOpen);
  }

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    this.toggleOpenState(this.isOpen);
  }

  @HostListener('document:click', ['$event']) onBodyClick(event: any) {
    if (!this.dontHideOnBodyClick && (!this.el.nativeElement.contains(event.target)) &&
                                      (!event.target.classList.contains('not-clickable'))) {
      this.isOpen = false;
      this.toggleOpenState(this.isOpen);
    }
  }

  private toggleOpenState(isSet: boolean) {
    if (isSet) {
        this.renderer.addClass(this.el.nativeElement.parentElement, 'open');
    } else {
        this.renderer.removeClass(this.el.nativeElement.parentElement, 'open');
    }
  }
}

import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input() format;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    console.log('-->onBlur called', this.el);
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }
}

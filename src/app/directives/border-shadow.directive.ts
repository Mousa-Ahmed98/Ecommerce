import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBorderShadow]',
  standalone: true
})
export class BorderShadowDirective implements OnChanges {
  @Input() BGColor: string="white";

  
  constructor(private element: ElementRef) { }

  @HostListener('mouseover') over(){
    this.element.nativeElement.style.backgroundColor=this.BGColor;
    this.element.nativeElement.style.boxShadow = "5px 5px 10px";
  }

  @HostListener('mouseout') out(){
    this.element.nativeElement.style.backgroundColor="white";
    this.element.nativeElement.style.boxShadow = "2px 2px 5px";
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }


}

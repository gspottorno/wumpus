import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private _elementRef: ElementRef) {
    //console.log('Directiva insertada';
    _elementRef.nativeElement.style.backgroundColor = 'Yellow';
  }

  @Input("appResaltado") nuevoColor:string; //al tener el input es que esta variable viene de fuera

  @HostListener('mouseenter') mouseEncima() {
    this.resaltar( this.nuevoColor)
  }


    @HostListener('mouseleave') mouseFuera() {
      this.resaltar( null )
    }

    private resaltar( color:string = 'yellow' ) {
      this._elementRef.nativeElement.style.backgroundColor = color;
    }

}

import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDecipher]'
})
export class DecipherDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
